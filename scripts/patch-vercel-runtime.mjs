import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const configPath = join('.vercel', 'output', 'functions', '_render.func', '.vc-config.json');

if (existsSync(configPath)) {
  const config = JSON.parse(readFileSync(configPath, 'utf8'));
  config.runtime = 'nodejs22.x';
  writeFileSync(configPath, JSON.stringify(config, null, '\t'));
  console.log('[@ai-news-radar] Patched Vercel function runtime: nodejs22.x');
} else {
  console.warn('[@ai-news-radar] .vc-config.json not found — skipping runtime patch');
}
