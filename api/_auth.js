const crypto = require('crypto');

const JWT_SECRET = process.env.JWT_SECRET || 'apexcore_super_secret_jwt_key_2026_x89!master';

// ──────────────────────────────────────────────────────────────────────────────
// Password Hashing with Scrypt & Random Salt (OWASP Standard)
// ──────────────────────────────────────────────────────────────────────────────
function hashPassword(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString('hex');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) return reject(err);
      resolve({
        salt,
        hash: derivedKey.toString('hex')
      });
    });
  });
}

function verifyPassword(password, salt, hash) {
  return new Promise((resolve) => {
    if (!salt || !hash) return resolve(false);
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) return resolve(false);
      try {
        const keyBuffer = Buffer.from(derivedKey.toString('hex'), 'hex');
        const hashBuffer = Buffer.from(hash, 'hex');
        if (keyBuffer.length !== hashBuffer.length) return resolve(false);
        resolve(crypto.timingSafeEqual(keyBuffer, hashBuffer));
      } catch (_) {
        resolve(false);
      }
    });
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// Native Zero-Dependency JWT (RFC 7519 HMAC-SHA256)
// ──────────────────────────────────────────────────────────────────────────────
function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) base64 += '=';
  return Buffer.from(base64, 'base64').toString('utf-8');
}

function generateToken(payload, expiresInDays = 30) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const nowSec = Math.floor(Date.now() / 1000);
  const fullPayload = {
    ...payload,
    iat: nowSec,
    exp: nowSec + (expiresInDays * 86400)
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(fullPayload));
  const data = `${encodedHeader}.${encodedPayload}`;

  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(data)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${data}.${signature}`;
}

function verifyToken(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [encodedHeader, encodedPayload, signature] = parts;
  const data = `${encodedHeader}.${encodedPayload}`;

  const expectedSignature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(data)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  try {
    const sigBuf = Buffer.from(signature);
    const expSigBuf = Buffer.from(expectedSignature);
    if (sigBuf.length !== expSigBuf.length || !crypto.timingSafeEqual(sigBuf, expSigBuf)) {
      return null;
    }

    const payload = JSON.parse(base64UrlDecode(encodedPayload));
    const nowSec = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < nowSec) {
      return null; // Expired
    }

    return payload;
  } catch (_) {
    return null;
  }
}

function extractBearerToken(req) {
  const authHeader = (req.headers && (req.headers.authorization || req.headers.Authorization)) || '';
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }
  return null;
}

function getAuthenticatedUser(req) {
  const token = extractBearerToken(req);
  if (!token) return null;
  return verifyToken(token);
}

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  extractBearerToken,
  getAuthenticatedUser,
  JWT_SECRET
};
