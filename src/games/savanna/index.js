import markup from './Savanna.html';
import Model from '../../services/model.js';
import View from '../../services/view.js';
import start from './js/scripts.js';
import './savanna.scss';
export default class Savanna extends View {
    constructor(view, model) {
        super();
        this.view = view;
        this.model = model;
        this.hash = 'Savanna';
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
        const html = this.render(markup, { title: 'Savanna' });
        show(html);
        this.init();
    }
}
