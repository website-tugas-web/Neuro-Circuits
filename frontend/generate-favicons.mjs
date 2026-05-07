import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync } from 'fs';

const svgBuffer = readFileSync('../images/neuro-circuits-logo.svg');

// Generate PNG icons at various sizes
await sharp(svgBuffer)
  .resize(192, 192)
  .png()
  .toFile('./app/icon-192.png');

await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile('./app/icon-512.png');

// Generate apple-touch-icon
await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile('./app/apple-icon.png');

// Generate proper Microsoft ICO container with multiple resolutions
// Safari requires a real ICO file, not a renamed PNG
const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

// Create real ICO file with multiple sizes
const icoBuffer = await pngToIco([png16, png32, png48]);
writeFileSync('./app/favicon.ico', icoBuffer);

console.log('✅ Generated favicons:');
console.log('  - icon.svg (vector)');
console.log('  - icon-192.png');
console.log('  - icon-512.png');
console.log('  - apple-icon.png (180x180)');
console.log('  - favicon.ico (Microsoft ICO: 16x16, 32x32, 48x48)');
