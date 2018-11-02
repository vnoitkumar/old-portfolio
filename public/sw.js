importScripts('/js/cache-polyfill.js');
const version = "2.0.2";
const cacheName = `vnoit-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(caches.open(cacheName).then(cache => {
        return cache.addAll(
            [
                '/',
                '/css/main.css',
                '/css/min-width-1024px.css',
                '/css/min-width-1200px.css',
                '/css/min-width-600px.css',
                '/css/min-width-760px.css',
                '/css/fontawesome/css/custom-fontawesome.css',
                '/images/vnoitkumar-avatar.png',
                '/images/favicons/favicon.ico',
                '/images/favicons/favicon-57.png'
            ]).then(() => self.skipWaiting());
    }));
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
    event.respondWith(caches.open(cacheName).then(cache => cache.match(event.request, {
        ignoreSearch: true
    })).then(response => {
        return response || fetch(event.request);
    }));
});
