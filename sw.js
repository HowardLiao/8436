// Service Worker for 8436 PWA
const CACHE_NAME = 'tci-8436-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './tci_togaf_enterprise_architecture.drawio',
  './tci_ai_architecture_rtl.drawio'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
