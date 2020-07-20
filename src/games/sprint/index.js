import markup from './Sprint.html';
import View from '../../services/view';
import Model from '../../services/model';
import start from './js/scripts';
import './styles.scss';


class Sprint { //extends View
  constructor(view, model) {
    // super();
    this.view = view;
    // this.model = model;
    this.hash = 'Sprint';
  }

  init() {
    document.querySelector('.sprint__img').src = './img/sprint/speaker.png'
    document.querySelector('.sprint__btn').addEventListener('click', ()=>{
      start();
      document.querySelector('.sprint__container').style.display = 'flex';
      document.querySelector('.sprint__main').style.display = 'none'
    })
  }

  display(show) {
    const html = this.view.render(markup, { title: 'Sprint!' });

    show(html);
    this.init();
  }
}

export default Sprint;
