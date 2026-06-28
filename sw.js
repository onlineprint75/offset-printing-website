/*
 * PPM PWA service worker.
 * Strategy:
 *   - Precache a small app shell on install.
 *   - Navigations: network-first (fresh pages), fall back to cache, then offline page.
 *   - Same-origin static assets: stale-while-revalidate.
 *   - Cross-origin (Firestore / googleapis / CDNs) and the admin dashboard: never cached
 *     (always go straight to the network so live/auth data is never stale).
 * Bump VERSION to invalidate old caches after a deploy.
 */
const VERSION = 'ppm-v1';
const STATIC_CACHE = `static-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;
const OFFLINE_URL = '/offline.html';

const PRECACHE = [
  '/index.html',
  '/style.css',
  '/translations.js',
  '/products-data.js',
  '/offline.html',
  '/assets/icons/icon-192.png',
  '/assets/images/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      // Tolerate individual misses so one 404 doesn't break the whole install.
      .then((cache) => Promise.allSettled(PRECACHE.map((u) => cache.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => !k.endsWith(VERSION)).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Let cross-origin requests (Firestore, googleapis, gstatic, CDNs) hit the network directly.
  if (url.origin !== self.location.origin) return;

  // Never cache the authenticated admin dashboard.
  if (url.pathname.startsWith('/admin-dashboard')) return;

  // Page navigations: network-first with cache + offline fallback.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() => caches.match(request).then((r) => r || caches.match(OFFLINE_URL)))
    );
    return;
  }

  // Static assets: stale-while-revalidate.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
