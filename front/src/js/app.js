import Shadow from './widgets/shadow';
import Fetcher from './fetcher';

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('./service.worker.js', {
        scope: '/',
      });
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();

// const reloader = document.querySelector('.reload');
// const container = document.querySelector('.news');
// const shadow = Shadow.create();

// container.appendChild(shadow);

// const fetcher = new Fetcher(container, shadow);
// fetcher.getNews();

// reloader.addEventListener('click', () => {
//   container.replaceChildren();
//   container.appendChild(shadow);
//   fetcher.getNews();
// });
