const { getDatabase, checkIfAdmin } = require('./_db');
const { hashPassword, verifyPassword, generateToken, getAuthenticatedUser } = require('./_auth');

function getClientIp(req) {
  return (
    (req.headers && (req.headers['x-forwarded-for'] || req.headers['x-real-ip'])) ||
    (req.socket && req.socket.remoteAddress) ||
    '127.0.0.1'
  ).split(',')[0].trim();
}

function getUserAgent(req) {
  return (req.headers && req.headers['user-agent']) || 'Unknown Device';
}

module.exports = async function handler(req, res) {
  // Setup CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const url = req.url || '';
  const action = req.query?.action || url.split('?')[0].split('/').filter(Boolean).pop() || '';
  const db = await getDatabase();

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) {}
  }
  body = body || {};

  const ip = getClientIp(req);
  const userAgent = getUserAgent(req);

  // ── POST /api/auth/register ───────────────────────────────────────────────
  if (req.method === 'POST' && (action === 'register' || url.includes('/register'))) {
    const { email, password } = body;
    let name = (body.name || '').trim();

    if (!email || !email.includes('@') || !email.includes('.')) {
      return res.status(400).json({ ok: false, message: 'Địa chỉ email không hợp lệ.' });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ ok: false, message: 'Mật khẩu phải có ít nhất 6 ký tự.' });
    }

    const cleanEmail = email.toLowerCase().trim();
    if (!name) {
      name = cleanEmail.split('@')[0];
    }
    const existing = await db.users.findOne({ email: cleanEmail });
    if (existing) {
      return res.status(409).json({ ok: false, message: 'Email này đã được đăng ký. Vui lòng đăng nhập.' });
    }

    const { salt, hash } = await hashPassword(password);
    const isAdmin = await checkIfAdmin(cleanEmail);

    const newUser = {
      email: cleanEmail,
      name: name.trim(),
      passwordHash: hash,
      salt,
      role: isAdmin ? 'admin' : 'student',
      avatar: '👨‍💻',
      bio: 'Học viên ApexCore - Quyết tâm vượt qua 56 ngày và đỗ Entry Test!',
      targetExamDate: null,
      targetScore: 90,
      createdAt: new Date(),
      lastLoginAt: new Date()
    };

    const insertResult = await db.users.insertOne(newUser);
    const userId = insertResult.insertedId || newUser._id;

    // Record login audit log
    await db.login_logs.insertOne({
      userId: String(userId),
      email: cleanEmail,
      name: newUser.name,
      status: 'SUCCESS',
      action: 'REGISTER',
      ip,
      userAgent,
      timestamp: new Date()
    });

    const token = generateToken({
      id: String(userId),
      email: cleanEmail,
      role: newUser.role,
      name: newUser.name
    });

    const userSafe = {
      id: String(userId),
      email: cleanEmail,
      name: newUser.name,
      role: newUser.role,
      avatar: newUser.avatar,
      bio: newUser.bio,
      targetExamDate: newUser.targetExamDate,
      targetScore: newUser.targetScore,
      createdAt: newUser.createdAt
    };

    return res.status(201).json({
      ok: true,
      message: 'Đăng ký tài khoản thành công!',
      token,
      user: userSafe
    });
  }

  // ── POST /api/auth/login ──────────────────────────────────────────────────
  if (req.method === 'POST' && (action === 'login' || url.includes('/login'))) {
    const { email, password } = body;

    if (!email || !password) {
      return res.status(400).json({ ok: false, message: 'Vui lòng nhập đầy đủ email và mật khẩu.' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const user = await db.users.findOne({ email: cleanEmail });

    if (!user) {
      await db.login_logs.insertOne({
        email: cleanEmail,
        name: 'Ẩn danh',
        status: 'FAILED',
        reason: 'Email không tồn tại',
        ip,
        userAgent,
        timestamp: new Date()
      });
      return res.status(401).json({ ok: false, message: 'Email hoặc mật khẩu không chính xác.' });
    }

    const isMatch = await verifyPassword(password, user.salt, user.passwordHash);
    if (!isMatch) {
      await db.login_logs.insertOne({
        userId: String(user._id),
        email: cleanEmail,
        name: user.name,
        status: 'FAILED',
        reason: 'Sai mật khẩu',
        ip,
        userAgent,
        timestamp: new Date()
      });
      return res.status(401).json({ ok: false, message: 'Email hoặc mật khẩu không chính xác.' });
    }

    // Update last login
    await db.users.updateOne({ _id: user._id }, { $set: { lastLoginAt: new Date() } });

    // Record login audit log
    await db.login_logs.insertOne({
      userId: String(user._id),
      email: cleanEmail,
      name: user.name,
      status: 'SUCCESS',
      action: 'LOGIN',
      ip,
      userAgent,
      timestamp: new Date()
    });

    const token = generateToken({
      id: String(user._id),
      email: cleanEmail,
      role: user.role || 'student',
      name: user.name
    });

    const userSafe = {
      id: String(user._id),
      email: cleanEmail,
      name: user.name,
      role: user.role || 'student',
      avatar: user.avatar || '👨‍💻',
      bio: user.bio || '',
      targetExamDate: user.targetExamDate || null,
      targetScore: user.targetScore || 90,
      createdAt: user.createdAt
    };

    return res.status(200).json({
      ok: true,
      message: 'Đăng nhập thành công!',
      token,
      user: userSafe
    });
  }

  // ── GET /api/auth/me ──────────────────────────────────────────────────────
  if (req.method === 'GET' && (action === 'me' || url.includes('/me'))) {
    const authUser = getAuthenticatedUser(req);
    if (!authUser) {
      return res.status(401).json({ ok: false, message: 'Chưa đăng nhập hoặc phiên đã hết hạn.' });
    }

    const user = await db.users.findOne({ _id: authUser.id });
    if (!user) {
      return res.status(404).json({ ok: false, message: 'Tài khoản không tồn tại.' });
    }

    return res.status(200).json({
      ok: true,
      user: {
        id: String(user._id),
        email: user.email,
        name: user.name,
        role: user.role || 'student',
        avatar: user.avatar || '👨‍💻',
        bio: user.bio || '',
        targetExamDate: user.targetExamDate || null,
        targetScore: user.targetScore || 90,
        createdAt: user.createdAt
      }
    });
  }

  // ── PUT /api/auth/profile ─────────────────────────────────────────────────
  if (req.method === 'PUT' && (action === 'profile' || url.includes('/profile'))) {
    const authUser = getAuthenticatedUser(req);
    if (!authUser) {
      return res.status(401).json({ ok: false, message: 'Yêu cầu đăng nhập để cập nhật hồ sơ.' });
    }

    const { name, avatar, bio, targetExamDate, targetScore } = body;
    const updateFields = {};

    if (name && name.trim().length >= 2) updateFields.name = name.trim();
    if (avatar) updateFields.avatar = avatar;
    if (typeof bio === 'string') updateFields.bio = bio.trim();
    if (targetExamDate !== undefined) updateFields.targetExamDate = targetExamDate;
    if (targetScore !== undefined) updateFields.targetScore = Number(targetScore) || 90;

    await db.users.updateOne({ _id: authUser.id }, { $set: updateFields });
    const updated = await db.users.findOne({ _id: authUser.id });

    return res.status(200).json({
      ok: true,
      message: 'Cập nhật thông tin hồ sơ thành công!',
      user: {
        id: String(updated._id),
        email: updated.email,
        name: updated.name,
        role: updated.role || 'student',
        avatar: updated.avatar || '👨‍💻',
        bio: updated.bio || '',
        targetExamDate: updated.targetExamDate,
        targetScore: updated.targetScore,
        createdAt: updated.createdAt
      }
    });
  }

  // ── PUT /api/auth/change-password ─────────────────────────────────────────
  if (req.method === 'PUT' && (action === 'change-password' || url.includes('/change-password'))) {
    const authUser = getAuthenticatedUser(req);
    if (!authUser) {
      return res.status(401).json({ ok: false, message: 'Yêu cầu đăng nhập.' });
    }

    const { currentPassword, newPassword } = body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ ok: false, message: 'Vui lòng cung cấp mật khẩu cũ và mới.' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ ok: false, message: 'Mật khẩu mới phải có tối thiểu 6 ký tự.' });
    }

    const user = await db.users.findOne({ _id: authUser.id });
    if (!user) {
      return res.status(404).json({ ok: false, message: 'Tài khoản không tồn tại.' });
    }

    const isMatch = await verifyPassword(currentPassword, user.salt, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ ok: false, message: 'Mật khẩu hiện tại không đúng.' });
    }

    const { salt, hash } = await hashPassword(newPassword);
    await db.users.updateOne({ _id: user._id }, { $set: { salt, passwordHash: hash } });

    return res.status(200).json({ ok: true, message: 'Đổi mật khẩu thành công!' });
  }

  return res.status(404).json({ ok: false, message: 'Endpoint không tồn tại.' });
};
