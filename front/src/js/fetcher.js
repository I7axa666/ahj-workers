import ErrorMsg from './widgets/errorMessage';
import News from './widgets/news';

export default class Fetcher {
  constructor(container, shadow) {
    this.url = 'https://ahj-workers.onrender.com';
    // this.url = 'http://localhost:3000/index.html';
    this.shadow = shadow;
    this.container = container;
  }

  async getNews() {
    const request = fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await request;
    if (result.status !== 200) {
      const { parentElement } = this.shadow;
      return parentElement.appendChild(ErrorMsg.showError());
    }

    this.shadow.remove();
    const newsList = JSON.parse(await result.text());
    const news = new News(newsList);
    return this.container.appendChild(news.showNews());
  }
}
