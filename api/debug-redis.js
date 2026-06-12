// Redis调试API
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { Redis } = require('@upstash/redis');
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
  });
  
  const testKey = 'debug:test:' + Date.now();
  const results = {
    connection: 'testing...',
    write: null,
    read: null,
    delete: null
  };
  
  try {
    // 测试写入
    const writeResult = await redis.set(testKey, 'test-value', { ex: 60 });
    results.write = writeResult;
    
    // 测试读取
    const readResult = await redis.get(testKey);
    results.read = readResult;
    
    // 测试删除
    const deleteResult = await redis.del(testKey);
    results.delete = deleteResult;
    
    results.connection = 'success';
  } catch (e) {
    results.connection = 'failed';
    results.error = e.message;
  }
  
  res.status(200).json({
    success: true,
    results,
    env: {
      hasUrl: !!process.env.UPSTASH_REDIS_REST_URL,
      hasToken: !!process.env.UPSTASH_REDIS_REST_TOKEN,
      urlPrefix: process.env.UPSTASH_REDIS_REST_URL?.substring(0, 30)
    }
  });
}
