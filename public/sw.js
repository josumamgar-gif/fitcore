// FitCore Service Worker — v14
const CACHE = 'fitcore-v14';
const FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // HTML siempre desde red para recibir actualizaciones inmediatas
  if(e.request.mode==='navigate'||e.request.url.endsWith('index.html')||e.request.url.endsWith('sw.js')){
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
    return;
  }
  // Resto de assets: caché primero
  e.respondWith(
    caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{
      const clone=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request,clone));
      return res;
    }))
  );
});

// Push notifications para recordatorios de pesaje
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'FitCore', {
      body: data.body || '¡Hora de registrar tu peso!',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-72.png',
      tag: 'fitcore-weigh',
      renotify: true,
      actions: [
        { action: 'open', title: 'Abrir app' },
        { action: 'dismiss', title: 'Más tarde' }
      ]
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action !== 'dismiss') {
    e.waitUntil(clients.openWindow('/'));
  }
});
