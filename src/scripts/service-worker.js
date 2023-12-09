import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './globals/config';

precacheAndRoute(self.__WB_MANIFEST);

const theRestaurantApi = new Route(
    ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
    new StaleWhileRevalidate({
        cacheName: CONFIG.CACHE_NAME,
    }),
);

const theRestaurantImageApi = new Route(
    ({ url }) => url.href.startsWith(CONFIG.BASE_IMAGE_SMALL_URL),
    new StaleWhileRevalidate({
        cacheName: CONFIG.CACHE_NAME,
    }),
);

registerRoute(theRestaurantApi);
registerRoute(theRestaurantImageApi);

self.addEventListener('install', () => {
    self.skipWaiting();
});
