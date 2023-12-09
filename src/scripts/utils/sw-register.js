import { Workbox } from 'workbox-window';

const swRegister = async () => {
    if (!('serviceWorker' in navigator)) {
        console.log('Serice Worker not supported in the browser');
        return;
    }
    const wb = new Workbox('./serviceWorker.js');

    try {
        await wb.register();
        console.log('Service worker registered');
    } catch (error) {
        console.log('Failed to register service worker', error);
    }
};

// eslint-disable-next-line import/prefer-default-export
export { swRegister };
