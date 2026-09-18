const https = require('https');
const fs = require('fs');
const path = require('path');

// ──────────────────────────────────────────────────────────────────────────────
// Universal Key Loader: Supports Vercel Environment Variables & Local .env
// ──────────────────────────────────────────────────────────────────────────────
function loadGeminiKeys() {
  const keys = new Set();

  // 1. Process environment variables (Vercel / Cloud standard)
  if (process.env.GEMINI_API_KEYS) {
    process.env.GEMINI_API_KEYS.split(/[\r\n,;]+/).forEach(k => {
      const trimmed = k.trim().replace(/^['"]|['"]$/g, '');
      if (trimmed) keys.add(trimmed);
    });
  }

  if (process.env.GEMINI_API_KEY) {
    const trimmed = process.env.GEMINI_API_KEY.trim().replace(/^['"]|['"]$/g, '');
    if (trimmed) keys.add(trimmed);
  }

  for (let i = 1; i <= 10; i++) {
    const k = process.env[`GEMINI_API_KEY_${i}`];
    if (k) {
      const trimmed = k.trim().replace(/^['"]|['"]$/g, '');
      if (trimmed) keys.add(trimmed);
    }
  }

  // 2. Fallback to local .env file if available
  const envCandidates = [
    path.join(process.cwd(), '.env'),
    path.join(__dirname, '..', '.env'),
    path.join(__dirname, '.env')
  ];

  for (const envPath of envCandidates) {
    if (fs.existsSync(envPath)) {
      try {
        const lines = fs.readFileSync(envPath, 'utf-8').split(/\r?\n/);
        for (let line of lines) {
          line = line.trim();
          if (!line || line.startsWith('#')) continue;

          // Check if format is KEY=value
          if (line.includes('=')) {
            const parts = line.split('=');
            const varName = parts[0].trim();
            const varVal = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
            if (varName.startsWith('GEMINI_API_KEY')) {
              if (varName === 'GEMINI_API_KEYS') {
                varVal.split(/[\r\n,;]+/).forEach(k => {
                  const t = k.trim();
                  if (t) keys.add(t);
                });
              } else if (varVal) {
                keys.add(varVal);
              }
            }
          } else {
            // Raw key per line format
            keys.add(line);
          }
        }
      } catch (_) {}
      break;
    }
  }

  const keyList = Array.from(keys);
  return keyList;
}

const GEMINI_KEYS = loadGeminiKeys();
let keyIndex = 0;
const keyCooldown = {};

// Usage statistics tracking
const keyUsage = GEMINI_KEYS.map((key, i) => ({
  idx: i,
  keyLabel: `Key #${i + 1}`,
  masked: `${key.slice(0, 8)}...${key.slice(-4)}`,
  requestsToday: 0,
  promptTokens: 0,
  candidatesTokens: 0,
  totalTokens: 0,
  recentRequests: [],
  lastUsedAt: null,
  lastModel: null
}));

function getNextAvailableKey() {
  if (GEMINI_KEYS.length === 0) return null;
  const now = Date.now();

  for (let i = 0; i < GEMINI_KEYS.length; i++) {
    const idx = (keyIndex + i) % GEMINI_KEYS.length;
    if (!keyCooldown[idx] || keyCooldown[idx] < now) {
      keyIndex = (idx + 1) % GEMINI_KEYS.length;
      return { key: GEMINI_KEYS[idx], idx };
    }
  }

  // All keys currently cooling — pick the one that cools down earliest
  let earliestIdx = 0;
  let earliestTime = Infinity;
  for (const [k, t] of Object.entries(keyCooldown)) {
    if (t < earliestTime) {
      earliestTime = t;
      earliestIdx = Number(k);
    }
  }
  delete keyCooldown[earliestIdx];
  return { key: GEMINI_KEYS[earliestIdx], idx: earliestIdx };
}

function coolDownKey(idx, seconds = 65) {
  keyCooldown[idx] = Date.now() + seconds * 1000;
  console.log(`⏳ Key #${idx + 1} on cooldown for ${seconds}s`);
}

function recordKeySuccess(idx, bodyStr, model) {
  const ku = keyUsage[idx];
  if (!ku) return;
  ku.requestsToday++;
  ku.lastUsedAt = Date.now();
  ku.lastModel = model;

  const now = Date.now();
  ku.recentRequests = (ku.recentRequests || []).filter(t => now - t < 60000);
  ku.recentRequests.push(now);

  try {
    const data = JSON.parse(bodyStr);
    if (data && data.usageMetadata) {
      const pTok = data.usageMetadata.promptTokenCount || 0;
      const cTok = data.usageMetadata.candidatesTokenCount || 0;
      const tTok = data.usageMetadata.totalTokenCount || (pTok + cTok);
      ku.promptTokens += pTok;
      ku.candidatesTokens += cTok;
      ku.totalTokens += tTok;
    }
  } catch (_) {}
}

function httpsPost(hostname, apiPath, payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const options = {
      hostname,
      path: apiPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      },
      timeout: 30000
    };

    const req = https.request(options, res => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.write(data);
    req.end();
  });
}

async function proxyGemini(payloadOrRaw) {
  let payload;
  if (typeof payloadOrRaw === 'string') {
    try {
      payload = JSON.parse(payloadOrRaw);
    } catch (err) {
      throw new Error('Dữ liệu gửi lên không đúng định dạng JSON: ' + err.message);
    }
  } else {
    payload = JSON.parse(JSON.stringify(payloadOrRaw));
  }

  const model = payload.model || 'gemini-2.5-flash';
  delete payload.model;

  if (GEMINI_KEYS.length === 0) {
    throw new Error('Không có Gemini API key nào được cấu hình. Vui lòng thiết lập biến môi trường GEMINI_API_KEYS.');
  }

  const maxAttempts = GEMINI_KEYS.length;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const keyInfo = getNextAvailableKey();
    if (!keyInfo) throw new Error('Không có API key nào khả dụng.');

    const { key, idx } = keyInfo;
    const apiPath = `/v1beta/models/${model}:generateContent?key=${key}`;

    try {
      const result = await httpsPost('generativelanguage.googleapis.com', apiPath, payload);

      if (result.statusCode === 200) {
        recordKeySuccess(idx, result.body, model);
        return { status: 200, body: result.body };
      }

      let errMsg = `HTTP ${result.statusCode}`;
      try {
        errMsg = JSON.parse(result.body)?.error?.message || errMsg;
      } catch (_) {}
      console.warn(`⚠ Key #${idx + 1} → ${result.statusCode}: ${errMsg.slice(0, 120)}`);

      if (result.statusCode === 429) {
        coolDownKey(idx, 65);
        continue;
      }
      if (result.statusCode === 400) {
        coolDownKey(idx, 3600);
        continue;
      }
      if (result.statusCode === 503 || result.statusCode === 500) {
        coolDownKey(idx, 15);
        continue;
      }

      return { status: result.statusCode, body: result.body };
    } catch (networkErr) {
      console.warn(`⚠ Key #${idx + 1} network error: ${networkErr.message}`);
      coolDownKey(idx, 10);
      continue;
    }
  }

  throw new Error('Tất cả API keys đều đang bận hoặc quá hạn mức. Vui lòng thử lại sau vài giây.');
}

function getAiStatus() {
  const now = Date.now();
  let grandTotalTokens = 0;
  let grandTotalRequests = 0;
  let availableCount = 0;

  const keysInfo = keyUsage.map((ku, i) => {
    grandTotalTokens += ku.totalTokens;
    grandTotalRequests += ku.requestsToday;
    const coolingRemaining = keyCooldown[i] && keyCooldown[i] > now
      ? Math.ceil((keyCooldown[i] - now) / 1000)
      : 0;

    const isAvailable = coolingRemaining === 0;
    if (isAvailable) availableCount++;

    const recentRpm = (ku.recentRequests || []).filter(t => now - t < 60000).length;

    let lastUsedStr = 'Chưa gọi hôm nay';
    if (ku.lastUsedAt) {
      const secAgo = Math.floor((now - ku.lastUsedAt) / 1000);
      if (secAgo < 60) lastUsedStr = `${secAgo} giây trước`;
      else if (secAgo < 3600) lastUsedStr = `${Math.floor(secAgo / 60)} phút trước`;
      else lastUsedStr = `${Math.floor(secAgo / 3600)} giờ trước`;
    }

    return {
      keyIndex: i + 1,
      key: `Key #${i + 1}`,
      masked: ku.masked,
      status: isAvailable ? 'available' : 'cooling',
      coolingSeconds: coolingRemaining,
      requestsToday: ku.requestsToday,
      dailyLimit: 1500,
      remainingRequests: Math.max(0, 1500 - ku.requestsToday),
      percentUsed: Math.min(100, Math.round((ku.requestsToday / 1500) * 100)),
      rpm: recentRpm,
      rpmLimit: 15,
      totalTokens: ku.totalTokens,
      promptTokens: ku.promptTokens,
      candidatesTokens: ku.candidatesTokens,
      lastUsedStr,
      lastUsedAt: ku.lastUsedAt,
      lastModel: ku.lastModel || 'gemini-2.5-flash'
    };
  });

  return {
    totalKeys: GEMINI_KEYS.length,
    availableCount,
    nextKeyIndex: keyIndex,
    grandTotalTokens,
    grandTotalRequests,
    grandDailyQuota: GEMINI_KEYS.length * 1500,
    keys: keysInfo
  };
}

module.exports = {
  loadGeminiKeys,
  proxyGemini,
  getAiStatus,
  GEMINI_KEYS
};
