import markup from './lingvist.html';
import './styles.scss';

import View from '../../services/view';
import MainModel from '../../services/model';
import * as constants from './js/utils/constants';
import create from './js/utils/create';
import Input from './js/Input';

class Lingvist extends View {
  constructor() {
    super();
    this.hash = 'lingvist';
    this.mainModel = new MainModel();
    this.dataOfWords = [];
    this.audioBtn = create('button', 'card__audio', null, null, ['type', 'button']);
    this.checkBtn = create('button', 'card__btn', 'Проверить', null, ['type', 'submit']);
    this.lookBtn = create('button', 'card__btn card__btn--light', 'Показать перевод', null, ['type', 'button']);

    this.image = create('img', 'card__image');
    this.translated = create('p', 'card__translated');
    this.meaningEng = create('p', 'card__meaning');
    this.meaningRu = create('p', 'card__meaning');
    this.example = create('p', 'card__sentence');
    this.transcript = create('p', 'card__transcript');
    this.inputWrapper = create('div', 'input');

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
    const iconAudio = '<svg><use xlink:href="./img/sprite.svg#speaker"></use></svg>';
    this.audioBtn.innerHTML = iconAudio;

    this.header = this.getElement('.card__header');
    this.header.append(this.audioBtn);
  }

  insertControlBtns() {
    this.footer = this.getElement('.card__footer');
    this.footer.append(this.lookBtn, this.checkBtn);
  }

  async insertLearning() {
    const words = await this.getWords();
    const input = new Input(words[0].word);
    const inputTemplate = input.createTemplate();

    this.inputWrapper.innerHTML = '';
    this.inputWrapper.append(...inputTemplate);
    this.translated.innerHTML = words[0].wordTranslate;
    this.transcript.innerHTML = words[0].transcription;
    this.meaningEng.innerHTML = words[0].textMeaning;
    this.meaningRu.innerHTML = words[0].textMeaningTranslate;
    this.example.innerHTML = `<span>Пример:</span> "${words[0].textExample}" — ${words[0].textExampleTranslate}`;
    this.image.src = `${constants.FOLDER_WITH_ASSETS}${words[0].image}`;

    input.inputAnswer.focus();
  }

  insertElementsAfterRender() {
    const cardRightColumn = create('div', 'card__body-right');
    this.form = this.getElement('#formCard');
    this.body = this.getElement('.card__body');

    this.insertAudioBtn();
    this.insertControlBtns();

    cardRightColumn.append(
      this.inputWrapper,
      this.translated,
      this.transcript,
      this.meaningEng,
      this.meaningRu,
      this.example,
    );
    this.body.append(this.image, cardRightColumn);
  }

  display(show) {
    const templateHTML = this.render(markup, { title: 'Lingvist' });
    show(templateHTML);

    this.insertElementsAfterRender();
    this.insertLearning();
  }
}

export default new Lingvist();
