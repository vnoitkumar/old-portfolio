importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

const version = "2.0.0";

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst({
        // Use a custom cache name
        cacheName: `vnoit-js-cache-${version}`,
    })
);

workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    workbox.strategies.staleWhileRevalidate({
        // Use a custom cache name
        cacheName: `vnoit-css-cache-${version}`,
    })
);

workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif|ico)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: `vnoit-image-cache-${version}`,
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 images
                maxEntries: 20,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ],
    })
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
        cacheName: `vnoit-google-fonts-webfonts-cache-${version}`,
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    }),
);

workbox.googleAnalytics.initialize();
