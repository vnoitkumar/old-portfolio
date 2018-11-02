importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

const version = "1.0.0";

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
    {
        "url": "browserconfig.xml",
        "revision": "3ba64fc42a03d0a7be9df4c4c1ba4352"
    },
    {
        "url": "css/fontawesome/css/custom-fontawesome.css",
        "revision": "e09053b6f75c1a17ef7de6305fc6ef72"
    },
    {
        "url": "css/fontawesome/webfonts/fa-brands-400.eot",
        "revision": "9b6c8da3c489424e2b3e9c9fb6314b37"
    },
    {
        "url": "css/fontawesome/webfonts/fa-brands-400.svg",
        "revision": "b5472631dbace30d549357ec325b9c62"
    },
    {
        "url": "css/fontawesome/webfonts/fa-brands-400.ttf",
        "revision": "947b9537bc0fecc8130d48eb753495a1"
    },
    {
        "url": "css/fontawesome/webfonts/fa-brands-400.woff",
        "revision": "7b464e274bc331f9a765d765359635a5"
    },
    {
        "url": "css/fontawesome/webfonts/fa-brands-400.woff2",
        "revision": "48461ea4e797c9774dabb4a0440d2f56"
    },
    {
        "url": "css/fontawesome/webfonts/fa-regular-400.eot",
        "revision": "7422060ca379ee9939d3b687d072acad"
    },
    {
        "url": "css/fontawesome/webfonts/fa-regular-400.svg",
        "revision": "b5a61b229c9c92a6ac21f5b0e3c6e9f1"
    },
    {
        "url": "css/fontawesome/webfonts/fa-regular-400.ttf",
        "revision": "73fe7f1effbf382f499831a0a9f18626"
    },
    {
        "url": "css/fontawesome/webfonts/fa-regular-400.woff",
        "revision": "381af09a1366b6c2ae65eac5dd6f0588"
    },
    {
        "url": "css/fontawesome/webfonts/fa-regular-400.woff2",
        "revision": "949a2b066ec37f5a384712fc7beaf2f1"
    },
    {
        "url": "css/fontawesome/webfonts/fa-solid-900.eot",
        "revision": "70e65a7d34902f2c350816ecfe2f6492"
    },
    {
        "url": "css/fontawesome/webfonts/fa-solid-900.svg",
        "revision": "38508b2e7fac045869a86a15936433f7"
    },
    {
        "url": "css/fontawesome/webfonts/fa-solid-900.ttf",
        "revision": "0079a0ab6bec4da7d6e16f2a2e87cd71"
    },
    {
        "url": "css/fontawesome/webfonts/fa-solid-900.woff",
        "revision": "815694de1120d6c1e9d1f0895ee81056"
    },
    {
        "url": "css/fontawesome/webfonts/fa-solid-900.woff2",
        "revision": "14a08198ec7d1eb96d515362293fed36"
    },
    {
        "url": "css/main.css",
        "revision": "6093000895bb3a47895d71ec7cd123e7"
    },
    {
        "url": "css/min-width-1024px.css",
        "revision": "c2785d94e264e55b83c97df561e5622b"
    },
    {
        "url": "css/min-width-1200px.css",
        "revision": "382ace1b83e659f3902b376b6eb03bcf"
    },
    {
        "url": "css/min-width-600px.css",
        "revision": "858e1be9c2a1fc2f9ce1ef1e299eab2f"
    },
    {
        "url": "css/min-width-760px.css",
        "revision": "2a65dd5983dcbd6dce5be5415eb611f4"
    },
    {
        "url": "images/192x192.png",
        "revision": "859238d08fb19e35019f5bb99bb4e9db"
    },
    {
        "url": "images/512x512.png",
        "revision": "52f42106f9336d4093a1276d0f15a53b"
    },
    {
        "url": "images/favicons/favicon-114.png",
        "revision": "736ca46f89cca4f3c136bef14637c11d"
    },
    {
        "url": "images/favicons/favicon-120.png",
        "revision": "059bef79340ee6f4f156bb411240d3b0"
    },
    {
        "url": "images/favicons/favicon-144.png",
        "revision": "2bf2baaca6944d74eccf467b26db9197"
    },
    {
        "url": "images/favicons/favicon-150.png",
        "revision": "d9a2a8377d4ff854d93c480f03f53cc4"
    },
    {
        "url": "images/favicons/favicon-152.png",
        "revision": "cfd787f548234ecd61281b05a905f68f"
    },
    {
        "url": "images/favicons/favicon-16.png",
        "revision": "0ea2b67c8689c89f444676b9a7147f96"
    },
    {
        "url": "images/favicons/favicon-160.png",
        "revision": "0194e8a21884ff3a78007baa9f0cd32f"
    },
    {
        "url": "images/favicons/favicon-180.png",
        "revision": "44ff0b942b7ac769eca46934df7b48ce"
    },
    {
        "url": "images/favicons/favicon-192.png",
        "revision": "b8f0cc7ae97b5561404b7b41128302af"
    },
    {
        "url": "images/favicons/favicon-310.png",
        "revision": "01c85c0e0b22120e25b227406fbd19f5"
    },
    {
        "url": "images/favicons/favicon-32.png",
        "revision": "88e26e85404500fff7d9ed86becaa184"
    },
    {
        "url": "images/favicons/favicon-57.png",
        "revision": "8d5dc34d9ac2d6848c6c0d4bac1b3e8b"
    },
    {
        "url": "images/favicons/favicon-60.png",
        "revision": "736e09a9b274e44ce744a6f6806d7fd7"
    },
    {
        "url": "images/favicons/favicon-64.png",
        "revision": "67fb88dcbf9a359285e1eb6617a181a1"
    },
    {
        "url": "images/favicons/favicon-70.png",
        "revision": "501e05410ea6e1171209b6f0b8280c7d"
    },
    {
        "url": "images/favicons/favicon-72.png",
        "revision": "eae457a935c8e564822f9b3e3cdcffe0"
    },
    {
        "url": "images/favicons/favicon-76.png",
        "revision": "4eb88dbd7858ccbad38514da40acd567"
    },
    {
        "url": "images/favicons/favicon-96.png",
        "revision": "f88ceffa51b355d2060b879b2b2ac37e"
    },
    {
        "url": "images/favicons/favicon.ico",
        "revision": "9d3e9c2f9feee7a9cc22876d44eb9ac8"
    },
    {
        "url": "images/social/facebook-link-post.jpg",
        "revision": "55b5cc1b961facc1d0b5d3305c18999e"
    },
    {
        "url": "images/social/linkedin-photo.jpg",
        "revision": "70f15888faeb353dc1766ddf137a476d"
    },
    {
        "url": "images/social/twitter.jpg",
        "revision": "ab3a8bde668372fae0df2d93a5049a55"
    },
    {
        "url": "images/vnoitkumar-avatar.png",
        "revision": "52f42106f9336d4093a1276d0f15a53b"
    },
    {
        "url": "js/cache-polyfill.js",
        "revision": "66bca1e3b5ace4b9b726d453ebcb6c16"
    },
    {
        "url": "manifest.json",
        "revision": "399dc153ac8be0ee1f94f1a15f87411a"
    },
    {
        "url": "privacy-policy.html",
        "revision": "ece35bae8fdfe3bc905fbcdf3dbda33f"
    },
    {
        "url": "robots.txt",
        "revision": "5304240f15784003230ddebe0bb4e780"
    },
    {
        "url": "service-worker.js",
        "revision": "020437f36ce80859f90e2e0227dc15e8"
    },
    {
        "url": "sitemap.xml",
        "revision": "d142c9a8a8be6cc7208dc8cbab6107c6"
    }
]);

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
