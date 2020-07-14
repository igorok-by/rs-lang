import markup from './audioCall.html';
import View from '../../services/view';
import Model from '../../services/model';
import './styles.scss';
import start from './js/scripts';

class AudioCall { //extends View
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.hash = 'Audio-Call';
  }

  init() {
    document.querySelector('.call__img').src = './img/audio-call/audio.png';
    document.querySelector('.call__btn').addEventListener('click', () => {
      start(this.model);
      document.querySelector('.call__container').style.display = 'flex';
      document.querySelector('.call__main').style.display = 'none';
    });
  }

  display(show) {
    const html = this.view.render(markup, { title: 'Audio Call' });

    show(html);
    this.init();
  }
}

export default AudioCall;
