const CACHE='balaji-digital-seva-v2';
const ASSETS=[
  './','./index.html','./style.css','./script.js','./manifest.json',
  './assets/logo.svg','./assets/icon-192.png','./assets/icon-512.png',
  './assets/gallery/center-1.jpeg','./assets/gallery/center-2.jpeg',
  './assets/gallery/center-3.jpeg','./assets/gallery/center-4.jpeg',
  './assets/gallery/center-5.jpeg','./assets/gallery/center-6.jpeg',
  './assets/gallery/center-7.jpeg'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
    const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return r;
  }).catch(()=>caches.match('./index.html'))));
});
