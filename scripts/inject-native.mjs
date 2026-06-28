/*
 * Adds <script src="/native-app.js" defer></script> to every top-level *.html page.
 * Idempotent — skips files that already reference native-app.js.
 * Usage: node scripts/inject-native.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const TAG = '  <script src="/native-app.js" defer></script>\n';

for (const f of readdirSync('.').filter((f) => f.endsWith('.html'))) {
  let html = readFileSync(f, 'utf8');
  if (html.includes('native-app.js')) {
    console.log('• skip (already injected):', f);
    continue;
  }
  if (!html.includes('</head>')) {
    console.log('• skip (no </head>):', f);
    continue;
  }
  html = html.replace('</head>', `${TAG}</head>`);
  writeFileSync(f, html);
  console.log('✓ injected:', f);
}
