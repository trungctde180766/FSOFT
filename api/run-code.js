const { exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Detect if javac / java is available in the runtime environment
function isJdkAvailable() {
  try {
    execSync('javac -version', { stdio: 'ignore', timeout: 2000 });
    return true;
  } catch (_) {
    return false;
  }
}

function runJavaExecution({ code, driverCode, testCases }) {
  return new Promise((resolve) => {
    // Choose writable temp directory (os.tmpdir() works on Vercel Lambda & Local)
    const baseRunnerDir = path.join(os.tmpdir(), 'apexcore_runner');
    const runId = 'run_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    const runDir = path.join(baseRunnerDir, runId);

    try {
      fs.mkdirSync(runDir, { recursive: true });
    } catch (e) {
      return resolve({ ok: false, status: 'SERVER_ERROR', message: 'Không thể tạo thư mục chạy code: ' + e.message });
    }

    const cleanup = () => {
      try { fs.rmSync(runDir, { recursive: true, force: true }); } catch (_) {}
    };

    // Clean user code: remove package declarations
    const cleanedCode = (code || '').replace(/^\s*package\s+[\w\.]+;\s*/gm, '');
    const solutionFile = path.join(runDir, 'Solution.java');
    const mainFile = path.join(runDir, 'Main.java');

    const hasDriver = !!(driverCode && driverCode.trim().length > 0);

    if (hasDriver) {
      fs.writeFileSync(solutionFile, cleanedCode, 'utf-8');
      fs.writeFileSync(mainFile, driverCode, 'utf-8');
    } else {
      fs.writeFileSync(mainFile, cleanedCode, 'utf-8');
    }

    const filesToCompile = hasDriver ? 'Solution.java Main.java' : 'Main.java';
    const compileCmd = `javac -encoding UTF-8 ${filesToCompile}`;

    exec(compileCmd, { cwd: runDir, timeout: 8000 }, (compErr, compStdout, compStderr) => {
      if (compErr) {
        cleanup();
        let rawErr = compStderr || compStdout || compErr.message;
        const cleanErr = rawErr.split(runDir).join('').split(path.normalize(runDir)).join('').trim();
        return resolve({
          ok: true,
          status: 'COMPILE_ERROR',
          compilerError: cleanErr,
          passedTests: 0,
          totalTests: (testCases || []).length,
          testResults: []
        });
      }

      const tests = Array.isArray(testCases) && testCases.length > 0
        ? testCases
        : [{ id: 1, input: '', expectedOutput: '', isHidden: false }];

      const results = [];
      let allPassed = true;
      let overallStatus = 'ACCEPTED';
      let testIdx = 0;

      function executeNextTest() {
        if (testIdx >= tests.length) {
          cleanup();
          const passedCount = results.filter(r => r.passed).length;
          return resolve({
            ok: true,
            status: overallStatus,
            passedTests: passedCount,
            totalTests: tests.length,
            runtimeMs: results.reduce((acc, r) => acc + (r.runtimeMs || 0), 0),
            testResults: results
          });
        }

        const tc = tests[testIdx];
        const tStart = Date.now();
        const proc = exec('java -Dfile.encoding=UTF-8 -XX:+UseSerialGC -Xmx128m Main', {
          cwd: runDir,
          timeout: 4000
        }, (runErr, stdout, stderr) => {
          const tDuration = Date.now() - tStart;
          let actualOut = (stdout || '').replace(/\r\n/g, '\n').trim();
          const expectedOut = (tc.expectedOutput || '').replace(/\r\n/g, '\n').trim();

          if (runErr && runErr.killed) {
            allPassed = false;
            overallStatus = 'TIMEOUT';
            results.push({
              id: tc.id || (testIdx + 1),
              title: tc.title || `Test Case #${testIdx + 1}`,
              input: tc.input,
              expectedOutput: expectedOut,
              actualOutput: '⚠️ Time Limit Exceeded (Quá 4000ms - Kiểm tra vòng lặp vô tận)',
              passed: false,
              status: 'TIMEOUT',
              runtimeMs: tDuration,
              isHidden: tc.isHidden || false
            });
          } else if (runErr && !stdout) {
            allPassed = false;
            if (overallStatus !== 'TIMEOUT') overallStatus = 'RUNTIME_ERROR';
            let errStr = (stderr || runErr.message || 'Lỗi Runtime').replace(/\r\n/g, '\n').trim();
            errStr = errStr.split(runDir).join('').trim();
            results.push({
              id: tc.id || (testIdx + 1),
              title: tc.title || `Test Case #${testIdx + 1}`,
              input: tc.input,
              expectedOutput: expectedOut,
              actualOutput: `⚠️ Runtime Exception:\n${errStr}`,
              passed: false,
              status: 'RUNTIME_ERROR',
              runtimeMs: tDuration,
              isHidden: tc.isHidden || false
            });
          } else {
            const isMatch = actualOut === expectedOut;
            if (!isMatch) {
              allPassed = false;
              if (overallStatus === 'ACCEPTED') overallStatus = 'WRONG_ANSWER';
            }
            results.push({
              id: tc.id || (testIdx + 1),
              title: tc.title || `Test Case #${testIdx + 1}`,
              input: tc.input,
              expectedOutput: expectedOut,
              actualOutput: actualOut,
              passed: isMatch,
              status: isMatch ? 'PASSED' : 'WRONG_ANSWER',
              runtimeMs: tDuration,
              isHidden: tc.isHidden || false
            });
          }

          testIdx++;
          executeNextTest();
        });

        if (tc.input !== undefined && tc.input !== null) {
          try {
            proc.stdin.write(tc.input + '\n');
            proc.stdin.end();
          } catch (_) {}
        } else {
          try { proc.stdin.end(); } catch (_) {}
        }
      }

      executeNextTest();
    });
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method Not Allowed' } });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try { payload = JSON.parse(payload); } catch (_) {}
    }

    const testCases = (payload && payload.testCases) || [];

    // Check if Java JDK is available in environment
    if (!isJdkAvailable()) {
      return res.status(200).json({
        ok: true,
        status: 'COMPILE_ERROR',
        compilerError: '⚠️ Môi trường Vercel Cloud Serverless không tích hợp sẵn Java JDK để biên dịch trực tiếp.\n\n💡 Để chạy thử nghiệm và chấm điểm bài tập Practical Exam (PE) tự động:\n1. Tải hoặc Clone dự án về máy tính cá nhân\n2. Chạy ứng dụng qua file: start_app.bat (hoặc lệnh: npm start)\n3. Hệ thống sẽ kết nối với JDK trên máy và chấm điểm 100% chính xác!',
        passedTests: 0,
        totalTests: testCases.length,
        testResults: []
      });
    }

    const result = await runJavaExecution(payload);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Run code error:', err.message);
    return res.status(500).json({ ok: false, status: 'SERVER_ERROR', message: err.message });
  }
};
