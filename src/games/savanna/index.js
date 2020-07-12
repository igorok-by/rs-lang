/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
import markup from './Savanna.html';
import Model from '../../services/model.js';
import View from '../../services/view.js';
import start from './js/scripts.js';
import './savanna.scss';

class Savanna extends View {
    constructor() {
        super();
        this.hash = 'Savanna';
      }

    init() {
        const main = document.querySelector('.savanna__main ');
        const game = document.querySelector('.savanna_game-wrapper');
        const startBtn = document.querySelector('.savanna__intro-btn');
        startBtn.addEventListener('click', () => {
            start();
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
export default new Savanna();
