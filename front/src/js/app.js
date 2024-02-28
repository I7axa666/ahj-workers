import Shadow from './widgets/shadow';
import Fetcher from './fetcher';

const reloader = document.querySelector('.reload');
const container = document.querySelector('.news');
const shadow = Shadow.create();

container.appendChild(shadow);

const fetcher = new Fetcher(container, shadow);
fetcher.getNews();

reloader.addEventListener('click', () => {
  container.replaceChildren();
  container.appendChild(shadow);
  fetcher.getNews();
});

// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('./service-worker.js', { scope: './' })
// 	.then((reg) => {
// 		console.log('registred' + reg.scope);
// 	}).catch((error) => {
// 		console.log('register error' + error)
// 	});
// }
