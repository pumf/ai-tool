// 完整的IP限制流程测试
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { Redis } = require('@upstash/redis');
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
  });
  
  const testToolId = 'test-ip-limit';
  const testIP = '49.232.133.229'; // 使用固定的IP测试
  const today = new Date().toISOString().split('T')[0];
  const key = `ip:${testToolId}:${today}:${testIP}`;
  
  const results = {
    step1_check_before: null,
    step2_write: null,
    step3_check_after: null,
    step4_clean: null
  };
  
  try {
    // 步骤1: 检查写入前
    results.step1_check_before = await redis.get(key);
    
    // 步骤2: 写入
    results.step2_write = await redis.set(key, '1', { ex: 60 });
    
    // 步骤3: 检查写入后
    results.step3_check_after = await redis.get(key);
    
    // 步骤4: 清理
    results.step4_clean = await redis.del(key);
    
  } catch (e) {
    results.error = e.message;
  }
  
  res.status(200).json({
    success: true,
    key,
    results
  });
}
