import markup from './lingvist.html';
import './styles.scss';
import View from '../../services/view';
import MainModel from '../../services/model';

class Lingvist extends View {
  constructor() {
    super();
    this.hash = 'lingvist';
    this.mainModel = new MainModel();
    this.scopeOfWords = [];
    this.audioBtn = this.createElement('button', 'card__audio');
    this.checkBtn = this.createElement('button', 'card__btn');
    this.lookBtn = this.createElement('button', 'card__btn');
    this.form = '';
    this.header = '';
    this.body = '';
    this.footer = '';
  }

  async getWords() {
    const words = await this.mainModel.getWords({ group: 0, page: 2 });
    return words;
  }

  insertAudioBtn() {
    const imageSVG = '<svg><use xlink:href="./img/sprite.svg#speaker"></use></svg>';
    this.audioBtn.insertAdjacentHTML('beforeend', imageSVG);
    this.audioBtn.type = 'button';

    this.header = this.getElement('.card__header');
    this.header.append(this.audioBtn);
  }

  insertControlBtns() {
    this.checkBtn.insertAdjacentText('beforeend', 'Проверить');
    this.checkBtn.type = 'submit';

    this.lookBtn.type = 'button';
    this.lookBtn.classList.add('card__btn--light');
    this.lookBtn.insertAdjacentText('beforeend', 'Показать ответ');

    this.footer = this.getElement('.card__footer');
    this.footer.append(this.lookBtn, this.checkBtn);
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
  }
}

export default new Lingvist();
