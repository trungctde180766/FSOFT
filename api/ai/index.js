const { proxyGemini, getAiStatus, GEMINI_KEYS } = require('../_gemini');

module.exports = async function handler(req, res) {
  // Setup CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Route: Check if client is requesting status via /api/ai/status
  if (req.method === 'GET' || (req.url && req.url.endsWith('/status'))) {
    const statusData = getAiStatus();
    return res.status(200).json(statusData);
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method Not Allowed' } });
  }

  if (GEMINI_KEYS.length === 0) {
    return res.status(503).json({
      error: { message: 'AI proxy: Chưa cấu hình Gemini API Key. Vui lòng thêm biến môi trường GEMINI_API_KEYS trên Vercel.' }
    });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try { payload = JSON.parse(payload); } catch (_) {}
    }

    const result = await proxyGemini(payload);
    res.status(result.status);
    res.setHeader('Content-Type', 'application/json');
    return res.send(result.body);
  } catch (err) {
    console.error('AI Proxy Error:', err.message);
    return res.status(500).json({ error: { message: err.message } });
  }
};
