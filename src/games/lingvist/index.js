import markup from './lingvist.html';
import './styles.scss';
import View from '../../services/view';
import MainModel from '../../services/model';
import Input from './js/Input';

class Lingvist extends View {
  constructor() {
    super();
    this.hash = 'lingvist';
    this.mainModel = new MainModel();
    this.dataOfWords = [];
    this.audioBtn = this.createElement('button', 'card__audio');
    this.checkBtn = this.createElement('button', 'card__btn');
    this.lookBtn = this.createElement('button', 'card__btn');
    this.answer = this.createElement('input', 'input__answer');
    this.form = '';
    this.header = '';
    this.body = '';
    this.footer = '';
  }

  async getWords() {
    const words = await this.mainModel.getWords({ group: 0, page: 2 });
    console.log(words);
    return words;
  }

  insertAudioBtn() {
    const iconAudio = '<svg><use xlink:href="./img/sprite.svg#speaker"></use></svg>';
    this.audioBtn.innerHTML = iconAudio;
    this.audioBtn.type = 'button';

    this.header = this.getElement('.card__header');
    this.header.append(this.audioBtn);
  }

  insertControlBtns() {
    this.checkBtn.innerHTML = 'Проверить';
    this.checkBtn.type = 'submit';

    this.lookBtn.type = 'button';
    this.lookBtn.classList.add('card__btn--light');
    this.lookBtn.innerHTML = 'Показать перевод';

    this.footer = this.getElement('.card__footer');
    this.footer.append(this.lookBtn, this.checkBtn);
  }

  async insertLearning() {
    const words = await this.getWords();
    const input = new Input(words[0].word);

    this.body.innerHTML = '';
    // console.log(word);
    this.body.append(input.createTemplate());
  }

  insertElementsAfterRender() {
    this.insertAudioBtn();
    this.insertControlBtns();
    this.form = this.getElement('#formCard');
    this.body = this.getElement('.card__body');
  }

  display(show) {
    const templateHTML = this.render(markup, { title: 'Lingvist' });
    show(templateHTML);
    this.insertElementsAfterRender();
    this.insertLearning();
    // console.log(this.form);
  }
}

export default new Lingvist();
