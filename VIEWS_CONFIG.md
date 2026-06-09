# 浏览量统计功能配置指南

## 功能说明

- ✅ 全局共享浏览量（跨设备、跨浏览器）
- ✅ IP限制：一个IP一个工具每天只算一次
- ✅ 按浏览量排序：热门工具排在前面
- ✅ 显示优化：只显示👁️图标+数字

## 配置步骤

### 方案一：Upstash Redis（推荐，免费额度）

1. **注册 Upstash**
   - 访问 https://upstash.com
   - 注册账号（支持 GitHub 登录）

2. **创建 Redis 数据库**
   - 点击 "Create Database"
   - 选择区域（建议选择靠近 Vercel 部署区域的）
   - 数据库名称：`xiaofei-tools-views`

3. **获取连接信息**
   - 进入数据库详情页
   - 复制 `UPSTASH_REDIS_REST_URL` 和 `UPSTASH_REDIS_REST_TOKEN`

4. **配置 Vercel 环境变量**
   - 进入 Vercel 项目设置
   - Settings → Environment Variables
   - 添加以下变量：
     ```
     UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
     UPSTASH_REDIS_REST_TOKEN=xxx
     ```
   - 应用到所有环境（Production, Preview, Development）

5. **重新部署**
   - 触发 Vercel 重新部署以应用环境变量

### 方案二：内存存储（临时方案）

如果不配置 Upstash Redis，API 会使用内存存储：
- ⚠️ 数据不持久，服务重启后会丢失
- ⚠️ 不适合生产环境
- ✅ 适合快速测试

## API 接口

### GET /api/views/[toolId]

获取工具浏览量

**响应：**
```json
{
  "views": 123,
  "toolId": "music.pumf.top"
}
```

### POST /api/views/[toolId]

记录浏览（自动IP去重）

**响应：**
```json
{
  "views": 124,
  "toolId": "music.pumf.top",
  "recorded": true,
  "ip": "192***"
}
```

## 费用说明

### Upstash Redis 免费额度
- 每日 10,000 次请求
- 256MB 存储
- 对于浏览量统计完全够用

## 故障排查

### 浏览量不更新
1. 检查 Vercel 环境变量是否配置正确
2. 检查浏览器控制台是否有错误
3. 检查 Vercel 函数日志

### 浏览量丢失
- 确认是否配置了 Upstash Redis
- 内存存储在服务重启后会丢失数据

## 技术实现

- 前端：纯 JavaScript，无框架依赖
- 后端：Vercel Serverless Functions
- 存储：Upstash Redis / 内存存储
- IP限制：基于 `x-forwarded-for` header
- 去重逻辑：`IP + 工具ID + 日期` 作为唯一标识
