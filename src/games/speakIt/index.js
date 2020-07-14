import markup from './SpeakIt.html';
import View from '../../services/view';
import Model from '../../services/model';
import './styles.scss';
import start from './js/scripts';

import ItemWord from './js/itemWord';
import ItemImage from './js/itemImage';
import Difficult from './js/difficult';
import ButtonRestart from './js/buttonRestart';
import ButtonSpeak from './js/buttonSpeak';
import ButtonResult from './js/buttonResult';

// const model = new Model();

// const model = new Model();

class SpeakIt {
  constructor(view, model) {
    // super();
    this.view = view;
    this.model = model;
    this.hash = 'speakIt';
  }
  // async init() {
  //   const testItem = this.getElement('.speak__btn');
  //   console.log(testItem);
  //   const words = await model.getWords(0,1);

  //   console.log(words);
  //   // getWord(0,1)
  // }
  init() {
    document.querySelector('.speak__btn').addEventListener('click', () => {
      const mainImage = new ItemImage();
      mainImage.render();

      const buttonRestart = new ButtonRestart();
      buttonRestart.init();

      const buttonSpeak = new ButtonSpeak();
      buttonSpeak.init();

      const buttonResult = new ButtonResult();
      buttonResult.init();

      const page = 1;
      const group = 2;
      const isDot = true;
      // page,group,isDot,buttonResult,buttonSpeak,mainImage,buttonRestart
      // start(1, 2, true, buttonResult, buttonSpeak, mainImage, buttonRestart);
      console.log('start', this.model);
      start({ model: this.model, page, group, isDot, buttonResult, buttonSpeak, mainImage, buttonRestart });
      document.querySelector('.speak__container').style.display = 'flex';
      document.querySelector('.speak__main').style.display = 'none';

      document.querySelector('.speak__return').addEventListener('click', () => {
        document.querySelector('.speak__container').style.display = 'flex';
        document.querySelector('.speak__result').style.display = 'none';
      });

      document.querySelector('.speak__intro-btn').addEventListener('click', () => {
        document.querySelector('.speak__container').style.display = 'flex';
        document.querySelector('.speak__main').style.display = 'none';
      });

      document.querySelector('.speak__newGame').addEventListener('click', () => {
        // document.querySelector('.main-img .translate').innerHTML = ''
        document.querySelectorAll('.speak__item').forEach((el) => {
          el.classList.remove('speak__activeItem');
          el.classList.remove('speak__stopHover');
        });
        if (document.querySelector('.speak__input')) {
          document.querySelector('.speak__input').value = '';
        }

        const suc = document.querySelector('.speak__sucess').childNodes;

        suc.forEach((el) => document.querySelector('.speak__wrong').append(el));
        suc.forEach((el) => document.querySelector('.speak__wrong').append(el));
        document.querySelector('.speak__sucess').childNodes.forEach((el) => el.remove());

        document.querySelector('.speak__suc').innerHTML = `Не знаю: ${document.querySelector('.speak__sucess').childNodes.length}`;
        document.querySelector('.speak__error').innerHTML = `Ошибок: ${document.querySelector('.speak__wrong').childNodes.length}`;
      });
    });
  }

  display(show) {
    const html = this.view.render(markup, { title: 'Speak It!' });

    show(html);
    this.init();
  }
}

export default SpeakIt;
