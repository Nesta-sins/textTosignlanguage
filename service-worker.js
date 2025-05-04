const cacheName = 'sign-language-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/video01.mp4',
  '/video03.mp4',
  '/video04.mp4',
  '/video05.mp4',
  '/video06.mp4',
  '/video07.mp4',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
