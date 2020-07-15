import markup from './Savanna.html';
import start from './js/scripts';
import './savanna.scss';

export default class Savanna {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.hash = 'Savannah';
  }

  init() {
    const main = document.querySelector('.savanna__main ');
    const game = document.querySelector('.savanna_game-wrapper');
    const startBtn = document.querySelector('.savanna__intro-btn');
    startBtn.addEventListener('click', () => {
      start(this.model);
      main.style.display = 'none';
      game.style.display = 'flex';
    });
  }

  display(show) {
    const html = this.view.render(markup, { title: 'Savannah' });
    show(html);
    this.init();
  }
}
