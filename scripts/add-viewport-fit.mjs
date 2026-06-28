/*
 * Ensures every page's viewport meta has `viewport-fit=cover` so iOS exposes the
 * safe-area-inset-* env() values (needed by the status-bar/notch CSS). Idempotent.
 * Usage: node scripts/add-viewport-fit.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const re = /(<meta\s+name=["']viewport["']\s+content=["'])([^"']*)(["'])/i;

for (const f of readdirSync('.').filter((f) => f.endsWith('.html'))) {
  let html = readFileSync(f, 'utf8');
  const m = html.match(re);
  if (!m) {
    console.log('• no viewport meta:', f);
    continue;
  }
  if (/viewport-fit/i.test(m[2])) {
    console.log('• already has viewport-fit:', f);
    continue;
  }
  const updated = `${m[1]}${m[2].replace(/\s*$/, '')}, viewport-fit=cover${m[3]}`;
  html = html.replace(re, updated);
  writeFileSync(f, html);
  console.log('✓ viewport-fit added:', f);
}
