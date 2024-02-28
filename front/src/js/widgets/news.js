export default class News {
  constructor({ newsList }) {
    this.newsList = newsList;
  }

  showNews() {
    const ul = document.createElement('ul');
    ul.classList.add('news-list');
    for (let i = 0; i < this.newsList.length; i++) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = this.newsList[i].timestamp;
      const info = document.createElement('div');
      info.classList.add('info');
      const image = document.createElement('div');
      image.classList.add('image');
      const p = document.createElement('p');
      p.classList.add('description');
      p.textContent = this.newsList[i].description;

      info.appendChild(image);
      info.appendChild(p);
      li.appendChild(span);
      li.appendChild(info);

      ul.appendChild(li);
    }
    return ul;
  }
}
