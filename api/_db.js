const fs = require('fs');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

// Ensure local .env is loaded if process.env values are missing
(function loadLocalEnv() {
  const envPaths = [
    path.join(process.cwd(), '.env'),
    path.join(__dirname, '..', '.env'),
    path.join(__dirname, '.env')
  ];
  for (const envPath of envPaths) {
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
            if (!process.env[key]) {
              process.env[key] = val;
            }
          }
        }
        break;
      } catch (_) {}
    }
  }
})();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB_NAME || 'apexcore_db';

// ──────────────────────────────────────────────────────────────────────────────
// In-Memory / Local File Fallback Engine
// Used when MONGODB_URI is not yet configured, allowing instant offline testing
// ──────────────────────────────────────────────────────────────────────────────
const LOCAL_DB_FILE = path.join(process.cwd(), '.local_users_db.json');

function loadLocalData() {
  try {
    if (fs.existsSync(LOCAL_DB_FILE)) {
      return JSON.parse(fs.readFileSync(LOCAL_DB_FILE, 'utf-8'));
    }
  } catch (_) {}
  return { users: [], user_data: [], login_logs: [] };
}

function saveLocalData(data) {
  try {
    fs.writeFileSync(LOCAL_DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (_) {}
}

const localStore = {
  users: {
    async findOne(query) {
      const data = loadLocalData();
      return data.users.find(u => {
        if (query.email && u.email.toLowerCase() === query.email.toLowerCase()) return true;
        if (query._id && (u._id === query._id || String(u._id) === String(query._id))) return true;
        return false;
      }) || null;
    },
    async insertOne(doc) {
      const data = loadLocalData();
      const _id = doc._id || ('u_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7));
      const newDoc = { ...doc, _id: String(_id) };
      data.users.push(newDoc);
      saveLocalData(data);
      return { insertedId: newDoc._id };
    },
    async updateOne(filter, update) {
      const data = loadLocalData();
      const idx = data.users.findIndex(u => {
        if (filter.email && u.email.toLowerCase() === filter.email.toLowerCase()) return true;
        if (filter._id && String(u._id) === String(filter._id)) return true;
        return false;
      });
      if (idx !== -1) {
        data.users[idx] = { ...data.users[idx], ...(update.$set || update) };
        saveLocalData(data);
        return { modifiedCount: 1 };
      }
      return { modifiedCount: 0 };
    },
    async deleteOne(filter) {
      const data = loadLocalData();
      const initialLen = data.users.length;
      data.users = data.users.filter(u => String(u._id) !== String(filter._id));
      saveLocalData(data);
      return { deletedCount: initialLen - data.users.length };
    },
    async find() {
      const data = loadLocalData();
      return {
        toArray: async () => [...data.users]
      };
    },
    async countDocuments() {
      const data = loadLocalData();
      return data.users.length;
    }
  },

  user_data: {
    async findOne(query) {
      const data = loadLocalData();
      return data.user_data.find(d => String(d.userId) === String(query.userId)) || null;
    },
    async updateOne(filter, update, options = {}) {
      const data = loadLocalData();
      const idx = data.user_data.findIndex(d => String(d.userId) === String(filter.userId));
      const setPayload = update.$set || update;
      if (idx !== -1) {
        data.user_data[idx] = { ...data.user_data[idx], ...setPayload };
        saveLocalData(data);
        return { modifiedCount: 1 };
      } else if (options.upsert) {
        const newDoc = { userId: String(filter.userId), ...setPayload };
        data.user_data.push(newDoc);
        saveLocalData(data);
        return { upsertedCount: 1 };
      }
      return { modifiedCount: 0 };
    }
  },

  login_logs: {
    async insertOne(doc) {
      const data = loadLocalData();
      const newDoc = {
        _id: 'log_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
        ...doc,
        timestamp: doc.timestamp || new Date()
      };
      data.login_logs.unshift(newDoc);
      // Keep latest 1000 logs
      if (data.login_logs.length > 1000) data.login_logs.pop();
      saveLocalData(data);
      return { insertedId: newDoc._id };
    },
    async find(query = {}) {
      const data = loadLocalData();
      let logs = [...data.login_logs];
      if (query.status) {
        logs = logs.filter(l => l.status === query.status);
      }
      return {
        sort() {
          return {
            limit(n) {
              return {
                toArray: async () => logs.slice(0, n)
              };
            },
            toArray: async () => logs
          };
        },
        limit(n) {
          return {
            toArray: async () => logs.slice(0, n)
          };
        },
        toArray: async () => logs
      };
    },
    async countDocuments(query = {}) {
      const data = loadLocalData();
      if (query.status) {
        return data.login_logs.filter(l => l.status === query.status).length;
      }
      return data.login_logs.length;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────────
// MongoDB Real Driver Connection Caching
// ──────────────────────────────────────────────────────────────────────────────
let cachedClient = null;
let cachedDb = null;

async function connectToMongo() {
  if (!MONGODB_URI) {
    return null;
  }

  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  try {
    const client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000
    });
    await client.connect();
    cachedClient = client;
    cachedDb = client.db(DB_NAME);
    console.log(`🍃 Connected to MongoDB Atlas [${DB_NAME}] successfully!`);
    return cachedDb;
  } catch (err) {
    console.warn(`⚠️ Could not connect to MongoDB Atlas (${err.message}). Falling back to local store.`);
    return null;
  }
}

async function getDatabase() {
  const mongoDb = await connectToMongo();
  if (mongoDb) {
    return {
      type: 'mongodb',
      users: mongoDb.collection('users'),
      user_data: mongoDb.collection('user_data'),
      login_logs: mongoDb.collection('login_logs')
    };
  }

  return {
    type: 'local',
    users: localStore.users,
    user_data: localStore.user_data,
    login_logs: localStore.login_logs
  };
}

// Check if an email should be default admin (Strict whitelist: ONLY configured ADMIN_EMAILS)
async function checkIfAdmin(email) {
  if (!email) return false;
  const adminEmails = (process.env.ADMIN_EMAILS || 'thanhtrung9ctv@gmail.com,thanhtrung8ctv@gmail.com')
    .toLowerCase()
    .split(',')
    .map(e => e.trim())
    .filter(Boolean);

  return adminEmails.includes(email.toLowerCase().trim());
}

module.exports = {
  getDatabase,
  checkIfAdmin,
  ObjectId
};
