import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.REMOVE_BG_KEY;
if (!API_KEY) {
  console.error('❌ REMOVE_BG_KEY is missing in .env');
  process.exit(1);
}

const inputPath = path.resolve(__dirname, '../src/assets/profile.jpg');
const outputPath = path.resolve(__dirname, '../src/assets/profile.png');

async function run() {
  // Ensure source photo exists
  try {
    await fs.access(inputPath);
  } catch {
    console.error(`❌ Missing input: ${inputPath}`);
    process.exit(1);
  }

  // Remove old PNG if exists
  try {
    await fs.unlink(outputPath);
    console.log('🗑 Removed old profile.png');
  } catch {
    // Ignore if file didn't exist
  }

  console.log('▶ Generating new profile.png via remove.bg …');

  const jpgBuffer = await fs.readFile(inputPath);
  const jpgBlob = new Blob([jpgBuffer], { type: 'image/jpeg' });

  const form = new FormData();
  form.append('image_file', jpgBlob, 'profile.jpg');
  form.append('size', 'auto');
  form.append('bg_color', 'ffffff'); // White background; comment out for transparent

  const res = await fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: { 'X-Api-Key': API_KEY },
    body: form,
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error('❌ remove.bg error:\n', txt);
    process.exit(1);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(outputPath, buf);
  console.log(`✅ New profile.png saved at ${outputPath}`);
}

run().catch((e) => {
  console.error('❌ Unexpected error:', e);
  process.exit(1);
});
