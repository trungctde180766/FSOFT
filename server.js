const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Auto-load .env for local development
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  try {
    const lines = fs.readFileSync(envPath, 'utf-8').split(/\r?\n/);
    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith('#')) continue;
      const eqIdx = line.indexOf('=');
      if (eqIdx !== -1) {
        const key = line.slice(0, eqIdx).trim();
        const val = line.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[key]) process.env[key] = val;
      }
    }
  } catch (_) {}
}

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

// ──────────────────────────────────────────────────────────────────────────────
// Gemini AI Proxy & Token Tracker (Shared with Vercel Serverless Function)
// ──────────────────────────────────────────────────────────────────────────────
const { proxyGemini, getAiStatus, GEMINI_KEYS } = require('./api/_gemini');


// ──────────────────────────────────────────────────────────────────────────────
// Static file MIME types
// ──────────────────────────────────────────────────────────────────────────────
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg'
};

// ──────────────────────────────────────────────────────────────────────────────
// In-Browser PE Code Runner (Real Java 23 Execution Engine)
// ──────────────────────────────────────────────────────────────────────────────
const RUNNER_BASE_DIR = path.join(BASE_DIR, '.pe_runner');
if (!fs.existsSync(RUNNER_BASE_DIR)) {
  try { fs.mkdirSync(RUNNER_BASE_DIR, { recursive: true }); } catch (_) {}
}

function runJavaExecution({ code, driverCode, testCases }) {
  return new Promise((resolve) => {
    const runId = 'run_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    const runDir = path.join(RUNNER_BASE_DIR, runId);

    try {
      fs.mkdirSync(runDir, { recursive: true });
    } catch (e) {
      return resolve({ ok: false, status: 'SERVER_ERROR', message: 'Không thể tạo thư mục chạy code: ' + e.message });
    }

    const cleanup = () => {
      try { fs.rmSync(runDir, { recursive: true, force: true }); } catch (_) {}
    };

    // Clean user code: remove package declarations to avoid compile errors
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

    // Step 1: Compile with javac
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

      // Step 2: Execute test cases sequentially
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

// ──────────────────────────────────────────────────────────────────────────────
// Serverless Handlers for Local Node Server
// ──────────────────────────────────────────────────────────────────────────────
const authHandler = require('./api/auth');
const userHandler = require('./api/user');
const adminHandler = require('./api/admin');

function adaptServerless(handler, req, res) {
  if (!res.status) {
    res.status = function(code) {
      res.statusCode = code;
      return res;
    };
  }
  if (!res.json) {
    res.json = function(data) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify(data));
      return res;
    };
  }
  if (!res.send) {
    res.send = function(data) {
      if (typeof data === 'object') return res.json(data);
      res.end(data);
      return res;
    };
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  req.query = Object.fromEntries(parsedUrl.searchParams.entries());

  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        req.body = body ? JSON.parse(body) : {};
      } catch (_) {
        req.body = body;
      }
      try {
        await handler(req, res);
      } catch (e) {
        console.error('Handler error:', e);
        if (!res.writableEnded) {
          res.status(500).json({ ok: false, message: e.message });
        }
      }
    });
  } else {
    handler(req, res).catch(e => {
      console.error('Handler error:', e);
      if (!res.writableEnded) {
        res.status(500).json({ ok: false, message: e.message });
      }
    });
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// HTTP Server
// ──────────────────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // ── Auth, User Data & Admin Endpoints ─────────────────────────────────────
  if (req.url.startsWith('/api/auth')) {
    return adaptServerless(authHandler, req, res);
  }
  if (req.url.startsWith('/api/user')) {
    return adaptServerless(userHandler, req, res);
  }
  if (req.url.startsWith('/api/admin')) {
    return adaptServerless(adminHandler, req, res);
  }

  // ── POST /api/run-code — Live Java 23 Runner ──────────────────────────────
  if (req.method === 'POST' && req.url === '/api/run-code') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const result = await runJavaExecution(payload);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (err) {
        console.error('Run code error:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, status: 'SERVER_ERROR', message: err.message }));
      }
    });
    return;
  }

  // ── POST /api/ai — Gemini proxy ────────────────────────────────────────────
  if (req.method === 'POST' && req.url === '/api/ai') {
    if (GEMINI_KEYS.length === 0) {
      res.writeHead(503, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        error: { message: 'AI proxy: không có API key. Thêm key vào biến môi trường GEMINI_API_KEYS hoặc file .env.' }
      }));
    }

    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const result = await proxyGemini(body);
        res.writeHead(result.status, { 'Content-Type': 'application/json' });
        res.end(result.body);
      } catch (err) {
        console.error('AI proxy error:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: { message: err.message } }));
      }
    });
    return;
  }

  // ── GET /api/ai/status — comprehensive key health & token stats ──────────
  if (req.method === 'GET' && req.url === '/api/ai/status') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(getAiStatus()));
  }

  // ── Static file server ─────────────────────────────────────────────────────
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  let safePath = path.normalize(path.join(BASE_DIR, 'public', reqPath));
  if (!fs.existsSync(safePath) || !fs.statSync(safePath).isFile()) {
    safePath = path.normalize(path.join(BASE_DIR, reqPath));
  }

  if (!safePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 Not Found');
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
    fs.createReadStream(safePath).pipe(res);
  });
});

function startServer(port) {
  server.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log('=======================================================');
    console.log(`⚡ ApexCore Study App  →  ${url}`);
    console.log(`🤖 AI Proxy           →  POST ${url}/api/ai`);
    console.log(`📊 Key Status         →  GET  ${url}/api/ai/status`);
    console.log(`🔑 Keys loaded        →  ${GEMINI_KEYS.length} / 5`);
    console.log('=======================================================');
    if (process.platform === 'win32') exec(`start ${url}`);
  });

  server.on('error', err => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️  Port ${port} already in use — app may already be running.`);
      if (process.platform === 'win32') exec(`start http://localhost:${port}`);
    } else {
      console.error('Server error:', err);
    }
  });
}

process.on('uncaughtException', err => {
  console.error('Unhandled Exception:', err);
});

process.on('unhandledRejection', reason => {
  console.error('Unhandled Rejection:', reason);
});

if (require.main === module) {
  startServer(PORT);
}

module.exports = server;
