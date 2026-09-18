const { getDatabase } = require('./_db');
const { getAuthenticatedUser } = require('./_auth');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({ ok: false, message: 'Yêu cầu đăng nhập.' });
  }

  if (authUser.role !== 'admin') {
    return res.status(403).json({ ok: false, message: 'Từ chối truy cập: Bạn không có quyền Quản trị viên (Admin).' });
  }

  const db = await getDatabase();
  const url = req.url || '';
  const action = req.query?.action || url.split('?')[0].split('/').filter(Boolean).pop() || '';

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) {}
  }
  body = body || {};

  // ── GET /api/admin/stats ──────────────────────────────────────────────────
  if (req.method === 'GET' && (action === 'stats' || url.includes('/stats'))) {
    try {
      const totalUsers = await db.users.countDocuments({});
      const totalLogins = await db.login_logs.countDocuments({});
      const successLogins = await db.login_logs.countDocuments({ status: 'SUCCESS' });
      const failedLogins = await db.login_logs.countDocuments({ status: 'FAILED' });

      // Calculate aggregated learner metrics
      const allUsers = await (await db.users.find({})).toArray();
      let totalXpSystem = 0;
      let totalCompletedDays = 0;
      let totalPeSolved = 0;

      for (const u of allUsers) {
        const uData = await db.user_data.findOne({ userId: u._id });
        if (uData) {
          if (uData.xpData && uData.xpData.totalXP) totalXpSystem += uData.xpData.totalXP;
          if (uData.roadmapProgress) {
            totalCompletedDays += Object.values(uData.roadmapProgress).filter(p => p && p.completed).length;
          }
          if (uData.peSolvedMap) {
            totalPeSolved += Object.values(uData.peSolvedMap).filter(Boolean).length;
          }
        }
      }

      return res.status(200).json({
        ok: true,
        stats: {
          totalUsers,
          totalLogins,
          successLogins,
          failedLogins,
          totalXpSystem,
          totalCompletedDays,
          totalPeSolved,
          dbType: db.type === 'mongodb' ? 'MongoDB Atlas Cloud' : 'Local Persistence Store'
        }
      });
    } catch (err) {
      console.error('Admin stats error:', err);
      return res.status(500).json({ ok: false, message: 'Lỗi nạp thống kê: ' + err.message });
    }
  }

  // ── GET /api/admin/users ──────────────────────────────────────────────────
  if (req.method === 'GET' && (action === 'users' || url.includes('/users'))) {
    try {
      const usersList = await (await db.users.find({})).toArray();

      const enrichedUsers = await Promise.all(
        usersList.map(async (u) => {
          const uData = await db.user_data.findOne({ userId: u._id });
          let completedDays = 0;
          let xp = 0;
          let level = 1;
          let peSolved = 0;

          if (uData) {
            if (uData.roadmapProgress) {
              completedDays = Object.values(uData.roadmapProgress).filter(p => p && p.completed).length;
            }
            if (uData.xpData) {
              xp = uData.xpData.totalXP || 0;
              level = uData.xpData.level || 1;
            }
            if (uData.peSolvedMap) {
              peSolved = Object.values(uData.peSolvedMap).filter(Boolean).length;
            }
          }

          return {
            id: String(u._id),
            name: u.name,
            email: u.email,
            role: u.role || 'student',
            avatar: u.avatar || '👨‍💻',
            createdAt: u.createdAt,
            lastLoginAt: u.lastLoginAt || null,
            stats: {
              completedDays,
              xp,
              level,
              peSolved,
              lastSyncedAt: uData?.lastSyncedAt || null
            }
          };
        })
      );

      // Sort by newest first
      enrichedUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return res.status(200).json({
        ok: true,
        users: enrichedUsers
      });
    } catch (err) {
      console.error('Admin users error:', err);
      return res.status(500).json({ ok: false, message: 'Lỗi tải danh sách người dùng: ' + err.message });
    }
  }

  // ── PUT /api/admin/user-role ──────────────────────────────────────────────
  if (req.method === 'PUT' && (action === 'user-role' || url.includes('/user-role'))) {
    const { userId, role } = body;
    if (!userId || !['admin', 'student'].includes(role)) {
      return res.status(400).json({ ok: false, message: 'Dữ liệu không hợp lệ.' });
    }

    if (String(authUser.id) === String(userId)) {
      return res.status(400).json({ ok: false, message: 'Bạn không thể tự giáng quyền quản trị của chính mình.' });
    }

    await db.users.updateOne({ _id: userId }, { $set: { role } });
    return res.status(200).json({ ok: true, message: `Đã cập nhật vai trò thành [${role}].` });
  }

  // ── DELETE /api/admin/user ────────────────────────────────────────────────
  if (req.method === 'DELETE' && (action === 'user' || url.includes('/user'))) {
    const userId = body.userId || req.query?.userId;
    if (!userId) {
      return res.status(400).json({ ok: false, message: 'Thiếu userId cần xóa.' });
    }

    if (String(authUser.id) === String(userId)) {
      return res.status(400).json({ ok: false, message: 'Bạn không thể tự xóa tài khoản của chính mình.' });
    }

    await db.users.deleteOne({ _id: userId });
    return res.status(200).json({ ok: true, message: 'Đã xóa tài khoản học viên thành công.' });
  }

  // ── GET /api/admin/logs ───────────────────────────────────────────────────
  if (req.method === 'GET' && (action === 'logs' || url.includes('/logs'))) {
    try {
      const query = {};
      const statusFilter = req.query?.status;
      if (statusFilter && ['SUCCESS', 'FAILED'].includes(statusFilter)) {
        query.status = statusFilter;
      }

      const limit = Number(req.query?.limit) || 100;
      const logsCursor = await db.login_logs.find(query);
      const logs = await logsCursor.sort({ timestamp: -1 }).limit(limit).toArray();

      return res.status(200).json({
        ok: true,
        logs
      });
    } catch (err) {
      console.error('Admin logs error:', err);
      return res.status(500).json({ ok: false, message: 'Lỗi tải nhật ký: ' + err.message });
    }
  }

  return res.status(404).json({ ok: false, message: 'Endpoint admin không tồn tại.' });
};
