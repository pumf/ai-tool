// 浏览量统计 API
// 支持 Upstash Redis 或内存存储

// 内存存储（临时方案，重启会丢失数据）
const memoryStore = new Map();

// Upstash Redis 配置（推荐）
let redis = null;
let redisError = null;

try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const { Redis } = require('@upstash/redis');
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN
    });
    console.log('✅ Redis connected successfully');
  } else {
    console.log('⚠️ Redis env vars not found, using memory store');
  }
} catch (e) {
  redisError = e.message;
  console.error('❌ Redis connection failed:', e.message);
}

// 获取客户端真实IP
function getClientIP(req) {
  // Vercel 会设置这些header
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  
  // 回退到连接IP
  return req.connection?.remoteAddress || 'unknown';
}

// 获取今天的日期字符串（YYYY-MM-DD）
function getToday() {
  return new Date().toISOString().split('T')[0];
}

// 生成IP限制的key
function getIPKey(toolId, ip) {
  const today = getToday();
  return `ip:${toolId}:${today}:${ip}`;
}

// 生成浏览量的key
function getViewsKey(toolId) {
  return `views:${toolId}`;
}

// 获取浏览量
async function getViews(toolId) {
  if (redis) {
    const views = await redis.get(getViewsKey(toolId));
    return parseInt(views) || 0;
  } else {
    return memoryStore.get(getViewsKey(toolId)) || 0;
  }
}

// 增加浏览量
async function incrementViews(toolId) {
  if (redis) {
    return await redis.incr(getViewsKey(toolId));
  } else {
    const key = getViewsKey(toolId);
    const current = memoryStore.get(key) || 0;
    const newValue = current + 1;
    memoryStore.set(key, newValue);
    return newValue;
  }
}

// 检查IP今天是否已经浏览过
async function hasViewed(toolId, ip) {
  const key = getIPKey(toolId, ip);
  if (redis) {
    try {
      const viewed = await redis.get(key);
      console.log(`Redis GET ${key}: ${viewed} (type: ${typeof viewed})`);
      // Upstash Redis会将数字字符串转为数字，所以需要双重检查
      return viewed === 1 || viewed === '1';
    } catch (e) {
      console.error('Redis GET error:', e.message);
      return false;
    }
  } else {
    return memoryStore.get(key) === true;
  }
}

// 记录IP已浏览
async function markViewed(toolId, ip) {
  const key = getIPKey(toolId, ip);
  if (redis) {
    try {
      // 设置24小时过期 - 使用正确的Upstash API
      await redis.set(key, '1', { ex: 86400 });
      console.log(`Redis SET ${key}: success`);
      // 验证是否写入成功
      const verify = await redis.get(key);
      console.log(`Redis VERIFY ${key}: ${verify}`);
    } catch (e) {
      console.error('Redis SET error:', e.message);
    }
  } else {
    // 内存存储也设置过期（简单实现）
    memoryStore.set(key, true);
  }
}

// API Handler
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Client-Id');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // 获取工具ID
  const { toolId } = req.query;
  
  if (!toolId) {
    return res.status(400).json({ error: 'Missing toolId' });
  }
  
  try {
    if (req.method === 'GET') {
      // 获取浏览量
      const views = await getViews(toolId);
      return res.status(200).json({ views, toolId });
    }
    
    if (req.method === 'POST') {
      // 记录浏览（带IP限制）
      const ip = getClientIP(req);
      const hasAlreadyViewed = await hasViewed(toolId, ip);
      
      let views;
      if (hasAlreadyViewed) {
        // 已经浏览过，只返回当前浏览量，不增加
        views = await getViews(toolId);
      } else {
        // 第一次浏览，增加浏览量并标记
        views = await incrementViews(toolId);
        await markViewed(toolId, ip); // ✅ 关键：必须等待写入完成
      }
      
      return res.status(200).json({ 
        views, 
        toolId, 
        recorded: !hasAlreadyViewed,
        ip: ip.substring(0, 3) + '***', // 隐藏部分IP
        debug: {
          redis: redis ? 'connected' : 'disabled',
          redisError: redisError || null,
          ipKey: getIPKey(toolId, ip),
          hasViewed: hasAlreadyViewed
        }
      });
    }
    
    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
