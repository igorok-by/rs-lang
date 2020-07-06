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
    this.meaningRu = create('p', 'card__meaning card__meaning--primary');
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

  replaceWord(howToToggle) {
    const { word } = this.dataOfWords[this.cardIndex];
    let beReplaced;
    let replacedBy;

    if (howToToggle === 'hide') {
      beReplaced = new RegExp(`${word}`, 'i');
      replacedBy = ''.padEnd(word.length, constants.REPLACING_SYMBOL);
    } else {
      replacedBy = word;
      beReplaced = ''.padEnd(replacedBy.length, constants.REPLACING_SYMBOL);
    }

    this.meaningEng.innerHTML = this.meaningEng.innerHTML.replace(beReplaced, replacedBy);
    this.example.innerHTML = this.example.innerHTML.replace(beReplaced, replacedBy);
  }

  goNextCard() {
    this.audioBtn.classList.remove('card__audio--active');
    this.cardIndex += 1;
    this.insertLearning();
  }

  handleCorrectAnswer() {
    this.audioBtn.classList.add('card__audio--active');
    this.replaceWord();
  }

  handleSubmitAnswer(evt) {
    evt.preventDefault();
    const inputField = this.inputWrapper.querySelector('input');
    const dataOfWord = this.dataOfWords[this.cardIndex];
    const audio = new Audio(`${constants.FOLDER_WITH_ASSETS}${dataOfWord.audio}`);
    audio.addEventListener('ended', () => setTimeout(this.goNextCard.bind(this), constants.TIME_BETWEEN_CARDS));

    if (inputField.value === dataOfWord.word) {
      this.handleCorrectAnswer();
      audio.play();
    }
  }

  insertLearning() {
    const dataOfWord = this.dataOfWords[this.cardIndex];
    const input = new Input(dataOfWord.word);
    const inputTemplate = input.createTemplate();

    this.inputWrapper.innerHTML = '';
    this.inputWrapper.append(...inputTemplate);
    this.translated.innerHTML = dataOfWord.wordTranslate;
    this.transcript.innerHTML = dataOfWord.transcription;
    this.meaningEng.innerHTML = dataOfWord.textMeaning;
    this.meaningRu.innerHTML = dataOfWord.textMeaningTranslate;
    this.example.innerHTML = `<span>Пример:</span> "${dataOfWord.textExample}" <span>— ${dataOfWord.textExampleTranslate}</span>`;
    this.image.src = `${constants.FOLDER_WITH_ASSETS}${dataOfWord.image}`;

    this.replaceWord('hide');
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

  bindEventListeners() {
    this.form.addEventListener('submit', (event) => this.handleSubmitAnswer(event));
  }

  display(show) {
    const templateHTML = this.render(markup, { title: 'Lingvist' });
    show(templateHTML);

    this.insertElementsAfterRender();
    this.bindEventListeners();
  }
}

export default new Lingvist();
