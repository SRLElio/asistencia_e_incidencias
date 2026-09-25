const CACHE_NAME = 'dashboard-ef-v1';
const ARCHIVOS = ['./calif_1.html', './manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});