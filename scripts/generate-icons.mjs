/*
 * Generates square PWA / app icons from the wide brand logo.
 * Usage: npm run icons   (requires `sharp`)
 * Output: assets/icons/*.png
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = 'assets/images/logo.png';
const OUT = 'assets/icons';
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

mkdirSync(OUT, { recursive: true });

async function icon(size, ratio, file, background = WHITE) {
  const inner = Math.round(size * ratio);
  const logo = await sharp(SRC).resize({ width: inner, fit: 'inside' }).toBuffer();
  const meta = await sharp(logo).metadata();
  const left = Math.round((size - meta.width) / 2);
  const top = Math.round((size - meta.height) / 2);
  await sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: logo, left, top }])
    .png()
    .toFile(`${OUT}/${file}`);
  console.log(`✓ ${file}  (${size}x${size})`);
}

// Master (used by @capacitor/assets for native icons), PWA sizes, Apple + maskable.
await icon(1024, 0.80, 'icon-1024.png');
await icon(512, 0.80, 'icon-512.png');
await icon(192, 0.80, 'icon-192.png');
await icon(180, 0.80, 'apple-touch-icon.png');
await icon(512, 0.58, 'icon-maskable-512.png'); // extra padding for the maskable safe zone

console.log('Icons generated in', OUT);
