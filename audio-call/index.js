import markup from './AudioCall.html';
import View from '../../services/view';
import Model from '../../services/model';
import './styles.scss';
import start from './js/scripts';



class AudioCall extends View {
  constructor() {
    super();
    this.hash = 'Audio-Call';
  }

  init() {
    document.querySelector('.call__img').src = './img/audio-call/audio.png'
    document.querySelector('.call__btn').addEventListener('click', ()=>{
      start();
      document.querySelector('.call__container').style.display = 'flex';
      document.querySelector('.call__main').style.display = 'none'
    })
  }

  display(show) {
    const html = this.render(markup, { title: 'Audio Call' });

    show(html);
    this.init();
  }
}

export default new AudioCall();
