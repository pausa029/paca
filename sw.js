// Service Worker: guarda o app no aparelho para funcionar sem internet
const CACHE='cacau-v1';
const ARQUIVOS=['./','./index.html','./manifest.json','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  // Usa o que está guardado e atualiza em segundo plano quando houver internet
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(salvo=>{
    const rede=fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}return r}).catch(()=>salvo||caches.match('./index.html'));
    return salvo||rede;
  }));
});
