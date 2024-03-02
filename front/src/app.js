import Shadow from './js/widgets/shadow';
import Fetcher from './js/fetcher';

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


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Успешная регистрация
      console.log('ServiceWorker registration successful');
    }, function(err) {
      // При регистрации произошла ошибка
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

