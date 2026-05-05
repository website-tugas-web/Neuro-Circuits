import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from project root (one level up from src/)
app.use(express.static(path.join(__dirname, '..')));

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API info endpoint (moved to /api to avoid conflict with static index.html)
app.get('/api', (req, res) => {
  res.json({
    message: 'Neuro Circuits API Server',
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/health`);
  console.log(`Serving static files from: ${path.join(__dirname, '..')}`);
});
