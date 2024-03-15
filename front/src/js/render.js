import Shadow from './widgets/shadow';
import Fetcher from './fetcher';

export default class PageRender {
  constructor() {
    this.reloader = document.querySelector('.reload');
    this.container = document.querySelector('.news');
    this.shadow = Shadow.create();
    this.fetcher = new Fetcher(this.container, this.shadow);
  }

  showShadow() {
    this.container.appendChild(this.shadow);
  }

  showNews() {
    this.fetcher.getNews();

    this.reloader.addEventListener('click', () => {
      this.container.replaceChildren();
      this.container.appendChild(this.shadow);
      this.fetcher.getNews();
    });
  }
}
