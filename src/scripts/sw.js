import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const theRestaurantApi = new Route(
    ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
    new StaleWhileRevalidate({
        cacheName: 'therestaurant-api',
    }),
);

const theRestaurantImageApi = new Route(
    ({ url }) => url.href.startsWith([
        'https://restaurant-api.dicoding.dev/images/large/',
        'https://restaurant-api.dicoding.dev/images/medium/',
        'https://restaurant-api.dicoding.dev/images/small/',
    ]),
    new StaleWhileRevalidate({
        cacheName: 'therestaurant-image-api',
    }),
);

registerRoute(theRestaurantApi);
registerRoute(theRestaurantImageApi);

self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('push', (event) => {
    console.log('Service Worker: Pushed');

    const notificationData = {
        title: 'Push Notification',
        options: {
            body: 'This is a push notification',
            icon: '/favicon.png',
            image: '/icons/icon-512x512.png',
        },
    };

    const showNotification = self.registration.showNotification(
        notificationData.title,
        notificationData.options,
    );

    event.waitUntil(showNotification);
});
