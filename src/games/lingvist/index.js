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
    this.cardIndex = 0;

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

  static hideWordInPhrase(word, phrase) {
    const replacedWord = ''.padEnd(word.length, constants.REPLACING_SYMBOL);

    return phrase.replace(word, replacedWord);
  }

  insertLearning() {
    const dataOfWord = this.dataOfWords[this.cardIndex];
    const input = new Input(dataOfWord.word);
    const inputTemplate = input.createTemplate();
    const meaningEng = Lingvist.hideWordInPhrase(dataOfWord.word, dataOfWord.textMeaning);
    const exampleEng = Lingvist.hideWordInPhrase(dataOfWord.word, dataOfWord.textExample);

    this.inputWrapper.innerHTML = '';
    this.inputWrapper.append(...inputTemplate);
    this.translated.innerHTML = dataOfWord.wordTranslate;
    this.transcript.innerHTML = dataOfWord.transcription;
    this.meaningEng.innerHTML = meaningEng;
    this.meaningRu.innerHTML = dataOfWord.textMeaningTranslate;
    this.example.innerHTML = `<span>Пример:</span> "${exampleEng}" — ${dataOfWord.textExampleTranslate}`;
    this.image.src = `${constants.FOLDER_WITH_ASSETS}${dataOfWord.image}`;

    input.inputAnswer.focus();
  }

  async insertElementsAfterRender() {
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

    this.dataOfWords = await this.getWords();
    this.insertLearning();
  }

  display(show) {
    const templateHTML = this.render(markup, { title: 'Lingvist' });
    show(templateHTML);

    this.insertElementsAfterRender();
  }
}

export default new Lingvist();
