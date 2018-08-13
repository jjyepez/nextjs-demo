self.__precacheManifest = [{"url":"/_next/f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea/page/_app.js","revision":"f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea"},{"url":"/_next/f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea/page/_error.js","revision":"f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea"},{"url":"/_next/f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea/page/about.js","revision":"f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea"},{"url":"/_next/f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea/page/categories.js","revision":"f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea"},{"url":"/_next/f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea/page/index.js","revision":"f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea"},{"url":"/_next/f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea/page/preview.js","revision":"f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea"},{"url":"/_next/f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea/page/upload.js","revision":"f2f811c2-a60a-45b4-ac1e-66ffd6ea7eea"}];
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.(png|gif|jpg|mp4)$/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/static/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/api/, workbox.strategies.networkFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200],"headers":{"x-test":"true"}})] }), 'GET');
