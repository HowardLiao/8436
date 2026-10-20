// Service Worker for 8436 PWA
const CACHE_NAME = 'tci-8436-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './TCI_8436_Howard_企業資訊架構_HowardLiao.pdf',
  './TCI_8436_右至左架構演進_HowardLiao.pdf',
  './TCI_8436_四大立竿見影場景與合規手冊_HowardLiao.pdf'
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
