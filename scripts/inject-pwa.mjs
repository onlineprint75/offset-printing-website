/*
 * Injects PWA <head> tags + the service-worker registration script into every
 * top-level *.html page. Idempotent — skips files that already reference the manifest.
 * Usage: npm run inject
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const SNIPPET = `  <!-- PWA -->
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#ff6000" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="PPM" />
  <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
  <script src="/pwa.js" defer></script>
`;

const files = readdirSync('.').filter((f) => f.endsWith('.html'));

for (const f of files) {
  let html = readFileSync(f, 'utf8');
  if (html.includes('/manifest.json')) {
    console.log('• skip (already has PWA tags):', f);
    continue;
  }
  if (!html.includes('</head>')) {
    console.log('• skip (no </head>):', f);
    continue;
  }
  html = html.replace('</head>', `${SNIPPET}</head>`);
  writeFileSync(f, html);
  console.log('✓ injected:', f);
}
