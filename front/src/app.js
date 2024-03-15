import PageRender from './js/render';

const render = new PageRender();
render.showShadow();
render.showNews();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((registration) => {
      // Успешная регистрация
      console.log('myServiceWorker registration successful');
    }, (err) => {
      // При регистрации произошла ошибка
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
