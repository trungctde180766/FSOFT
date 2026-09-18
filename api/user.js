const { getDatabase } = require('./_db');
const { getAuthenticatedUser } = require('./_auth');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({ ok: false, message: 'Yêu cầu đăng nhập để truy cập dữ liệu học tập.' });
  }

  const db = await getDatabase();
  const url = req.url || '';
  const action = req.query?.action || url.split('?')[0].split('/').filter(Boolean).pop() || '';

  // ── GET /api/user/data ────────────────────────────────────────────────────
  if (req.method === 'GET' && (action === 'data' || url.includes('/data'))) {
    try {
      const data = await db.user_data.findOne({ userId: authUser.id });
      return res.status(200).json({
        ok: true,
        data: data || null
      });
    } catch (err) {
      console.error('Fetch user data error:', err);
      return res.status(500).json({ ok: false, message: 'Lỗi tải dữ liệu người dùng: ' + err.message });
    }
  }

  // ── POST /api/user/sync ───────────────────────────────────────────────────
  if (req.method === 'POST' && (action === 'sync' || url.includes('/sync'))) {
    try {
      let body = req.body;
      if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch (_) {}
      }
      body = body || {};

      const now = new Date();
      const syncPayload = {
        roadmapProgress: body.roadmapProgress || {},
        roadmapNotes: body.roadmapNotes || {},
        flashcardRatings: body.flashcardRatings || {},
        userErrors: body.userErrors || [],
        mockHistory: body.mockHistory || [],
        lessonProgress: body.lessonProgress || {},
        behaviorLogs: body.behaviorLogs || [],
        learnerProfile: body.learnerProfile || {},
        srsData: body.srsData || {},
        xpData: body.xpData || { totalXP: 0, level: 1 },
        quickNotes: body.quickNotes || '',
        chapterStats: body.chapterStats || {},
        peSolvedMap: body.peSolvedMap || {},
        lastSyncedAt: now
      };

      await db.user_data.updateOne(
        { userId: authUser.id },
        { $set: syncPayload },
        { upsert: true }
      );

      return res.status(200).json({
        ok: true,
        message: 'Đồng bộ tiến độ học tập thành công!',
        lastSyncedAt: now
      });
    } catch (err) {
      console.error('Sync user data error:', err);
      return res.status(500).json({ ok: false, message: 'Lỗi đồng bộ dữ liệu: ' + err.message });
    }
  }

  return res.status(404).json({ ok: false, message: 'Endpoint không tồn tại.' });
};
