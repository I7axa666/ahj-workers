export default class ErrorMsg {
  static showError() {
    const div = document.createElement('div');
    div.classList.add('error');
    const p = document.createElement('p');
    p.classList.add('text-error');
    p.textContent = 'Не удалось загрузить данные. Проверьте подключение и обновите страницу';

    div.appendChild(p);

    return div;
  }
}
