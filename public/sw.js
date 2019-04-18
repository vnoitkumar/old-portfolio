importScripts("/js/cache-polyfill.js");
const version = "4.0.0";
const cacheName = `vnoit-${version}`;
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache
                .addAll([
                    "/",
                    "/css/main.css",
                    "/css/min-width-600px.css",
                    "/css/min-width-760px.css",
                    "/css/min-width-1200px.css",
                    "/css/min-width-1024px.css",
                    "/css/fontawesome/css/custom-fontawesome.css",

                    "/images/vnoitkumar-avatar.png",
                    "/images/favicons/favicon.ico",
                    "/images/favicons/favicon-192.png",
                    "/images/favicons/favicon-160.png",
                    "/images/favicons/favicon-96.png",
                    "/images/favicons/favicon-64.png",
                    "/images/favicons/favicon-32.png",
                    "/images/favicons/favicon-16.png",

                    "/images/favicons/favicon-57.png",
                    "/images/favicons/favicon-114.png",
                    "/images/favicons/favicon-72.png",
                    "/images/favicons/favicon-144.png",
                    "/images/favicons/favicon-60.png",
                    "/images/favicons/favicon-120.png",
                    "/images/favicons/favicon-76.png",
                    "/images/favicons/favicon-152.png",
                    "/images/favicons/favicon-180.png"
                ])
                .then(() => self.skipWaiting());
        })
    );
});
self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", event => {
    event.respondWith(
        caches
            .open(cacheName)
            .then(cache =>
                cache.match(event.request, {
                    ignoreSearch: true
                })
            )
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
