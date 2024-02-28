export default class Shadow {
  static create() {
    const ul = document.createElement('ul');
    ul.classList.add('shadow');
    const li = document.createElement('li');
    const shadowSpan = document.createElement('div');
    shadowSpan.classList.add('shadow-span');
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('shadow-image');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('shadow-description');

    infoDiv.appendChild(imageDiv);
    infoDiv.appendChild(descriptionDiv);
    li.appendChild(shadowSpan);
    li.appendChild(infoDiv);
    ul.appendChild(li);
    ul.appendChild(li.cloneNode(true));
    ul.appendChild(li.cloneNode(true));

    return ul;
  }
}
