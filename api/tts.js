// Edge TTS 代理 API
// 调用 Python edge-tts 库合成语音
import { spawn } from 'child_process';
import path from 'path';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { text, voice, rate } = req.body || {};
  
  if (!text || !text.trim()) {
    res.status(400).json({ error: 'text is required' });
    return;
  }

  const voiceName = voice || 'zh-CN-XiaoxiaoNeural';
  const rateValue = rate || '+0%';

  try {
    // 调用 Python 脚本
    const scriptPath = path.join(process.cwd(), 'api', 'tts.py');
    const pythonProcess = spawn('python3', [scriptPath], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    // 发送输入数据
    const inputData = JSON.stringify({
      text: text.trim(),
      voice: voiceName,
      rate: rateValue
    });

    pythonProcess.stdin.write(inputData);
    pythonProcess.stdin.end();

    // 收集输出
    let stdoutBuffer = Buffer.alloc(0);
    let stderrBuffer = '';

    pythonProcess.stdout.on('data', (data) => {
      stdoutBuffer = Buffer.concat([stdoutBuffer, data]);
    });

    pythonProcess.stderr.on('data', (data) => {
      stderrBuffer += data.toString();
    });

    // 等待进程完成
    await new Promise((resolve, reject) => {
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Python process exited with code ${code}: ${stderrBuffer}`));
        }
      });
      pythonProcess.on('error', reject);
    });

    // 解析输出
    // 第一行是 JSON 元数据，后面是二进制音频数据
    const newlineIndex = stdoutBuffer.indexOf(10); // '\n'
    if (newlineIndex === -1) {
      throw new Error('Invalid response from TTS service');
    }

    const metaStr = stdoutBuffer.slice(0, newlineIndex).toString('utf-8');
    const meta = JSON.parse(metaStr);

    if (meta.type === 'error') {
      throw new Error(meta.message);
    }

    if (meta.type !== 'audio') {
      throw new Error('Unexpected response type: ' + meta.type);
    }

    const audioData = stdoutBuffer.slice(newlineIndex + 1);

    // 返回 MP3 音频
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', audioData.length);
    res.status(200).send(audioData);
  } catch (error) {
    console.error('TTS API error:', error);
    res.status(500).json({ error: error.message });
  }
}
