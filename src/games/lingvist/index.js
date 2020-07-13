/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import markup from './lingvist.html';
import './styles.scss';

import * as constants from './js/utils/constants';
import create from './js/utils/create';
import View from '../../services/view';
import MainModel from '../../services/model';
import Input from './js/Input';
import ProgressBar from './js/ProgressBar';

class Lingvist extends View {
  constructor() {
    super();
    this.hash = ''; // lingvist
    this.name = 'lingvist';
    this.mainModel = new MainModel();
    this.dataOfWords = [];
    this.cardIndex = 0;

    this.audioBtn = create('button', 'card__audio card__audio--inactive', null, null, ['type', 'button']);
    this.checkBtn = create('button', 'card__btn', 'Проверить', null, ['type', 'submit']);
    this.lookBtn = create('button', 'card__btn card__btn--light', 'Показать перевод', null, ['type', 'button']);
    this.image = create('img', 'card__image');
    this.translated = create('p', 'card__translated');
    this.meaningEng = create('p', 'card__meaning');
    this.meaningRu = create('p', 'card__meaning card__meaning--primary');
    this.example = create('p', 'card__sentence');
    this.transcript = create('p', 'card__transcript');
    this.inputWrapper = create('div', 'input');

    this.header = null;
    this.body = null;
    this.footer = null;
    this.form = null;
    this.input = null;
    this.progressBar = null;
    this.continueBtn = null;
    this.holderBindFunc = null;
  }

  async getWords() {
    const words = await this.mainModel.getWords({ group: 0, page: 1 });
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

  checkSettings(settings) {
    settings.optional.picture
      ? this.image.classList.remove('card--hidden')
      : this.image.classList.add('card--hidden');
    settings.optional.transcription
      ? this.transcript.classList.remove('card--hidden')
      : this.transcript.classList.add('card--hidden');
    settings.optional.translate
      ? this.translated.classList.remove('card--hidden')
      : this.translated.classList.add('card--hidden');
  }

  replaceLearnWord(howToToggle) {
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

  sayWordAloud() {
    const audio = new Audio(`${constants.FOLDER_WITH_ASSETS}${this.dataOfWords[this.cardIndex].audio}`);

    this.audioBtn.classList.add('card__audio--active');
    audio.play();
    audio.addEventListener('ended', () => this.audioBtn.classList.remove('card__audio--active'));
  }

  async continueLearning() {
    const card = document.querySelector('.card');

    card.classList.remove('card--finished');
    this.progressBar.container.remove();

    this.cardIndex = -1;
    this.dataOfWords = await this.mainModel.getWords({ group: 0, page: 2 });
    this.goNextCard();
    this.insertProgressBar();
  }

  handleReachEnd() {
    const card = document.querySelector('.card');

    card.classList.add('card--finished');
    this.progressBar.container.remove();
    this.continueBtn.addEventListener('click', this.continueLearning.bind(this), { once: true });
  }

  goNextCard() {
    this.checkBtn.innerHTML = 'Проверить';
    this.lookBtn.classList.remove('card__btn--hidden');
    this.inputWrapper.classList.remove('input--frozen');
    this.audioBtn.classList.add('card__audio--inactive');
    this.audioBtn.removeEventListener('click', this.holderBindFunc);

    this.cardIndex += 1;
    this.insertLearning();
  }

  getReadyForNextCard() {
    this.holderBindFunc = this.sayWordAloud.bind(this);

    this.replaceLearnWord();
    this.sayWordAloud();
    this.progressBar.increaseProgress();

    this.input.inputAnswer.value = '';
    this.input.wordHolder.classList.remove('input__word--transparent');
    this.input.letters.map((letterHolder) => letterHolder.classList.remove('warning'));
    this.inputWrapper.classList.add('input--frozen');

    this.checkBtn.innerHTML = 'Далее';
    this.lookBtn.classList.add('card__btn--hidden');
    this.audioBtn.classList.remove('card__audio--inactive');

    if (this.cardIndex + 1 === this.dataOfWords.length) {
      this.checkBtn.addEventListener('click', this.handleReachEnd.bind(this), { once: true });
    } else {
      this.checkBtn.addEventListener('click', this.goNextCard.bind(this), { once: true });
    }
    this.audioBtn.addEventListener('click', this.holderBindFunc);
  }

  hideHint() {
    this.input.wordHolder.classList.remove('input__word--transparent');
    this.input.letters.map((letterHolder) => letterHolder.classList.add('hidden'));
  }

  handleIncorrectAnswer(answer) {
    const answerLetters = answer.split('');

    this.input.letters.map((letterHolder) => letterHolder.classList.remove('warning'));
    answerLetters.map((letter) => {
      this.input.letters.map((letterHolder) => {
        if (letterHolder.innerHTML === letter) {
          letterHolder.classList.add('warning');
        }
      });
    });
    this.input.inputAnswer.value = '';
    this.input.letters.map((letterHolder) => letterHolder.classList.remove('hidden'));
    setTimeout(() => this.input.wordHolder.classList.add('input__word--transparent'), constants.FULL_OPACITY_TIME);

    this.input.inputAnswer.addEventListener('input', this.hideHint.bind(this), { once: true });
  }

  handleSubmitAnswer(evt) {
    evt.preventDefault();
    const dataOfWord = this.dataOfWords[this.cardIndex];
    const inputValue = this.input.inputAnswer.value.toLowerCase();

    if (inputValue === dataOfWord.word) {
      this.getReadyForNextCard();
    } else if (inputValue.length) {
      this.handleIncorrectAnswer(inputValue);
    }
  }

  insertProgressBar() {
    const main = document.querySelector('main.game-body');
    this.progressBar = new ProgressBar(this.dataOfWords.length);
    main.append(this.progressBar.renderBar());
  }

  insertLearning() {
    const dataOfWord = this.dataOfWords[this.cardIndex];
    this.input = new Input(dataOfWord.word);
    const inputTemplate = this.input.createTemplate();

    this.inputWrapper.innerHTML = '';
    this.inputWrapper.append(...inputTemplate);
    this.translated.innerHTML = dataOfWord.wordTranslate;
    this.transcript.innerHTML = dataOfWord.transcription;
    this.meaningEng.innerHTML = dataOfWord.textMeaning;
    this.meaningRu.innerHTML = dataOfWord.textMeaningTranslate;
    this.example.innerHTML = `<span>Пример:</span> "${dataOfWord.textExample}" <span>— ${dataOfWord.textExampleTranslate}</span>`;
    this.image.src = `${constants.FOLDER_WITH_ASSETS}${dataOfWord.image}`;

    this.replaceLearnWord('hide');
    this.input.inputAnswer.focus();
  }

  async insertElementsAfterRender() {
    const cardRightColumn = create('div', 'card__body-right');
    this.form = this.getElement('#formCard');
    this.body = this.getElement('.card__body');
    this.continueBtn = this.getElement('#btnContinue');

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
    this.insertProgressBar();
  }

  bindEventListeners() {
    this.form.addEventListener('submit', (event) => this.handleSubmitAnswer(event));
    this.lookBtn.addEventListener('click', this.getReadyForNextCard.bind(this));
  }

  display(show) {
    const templateHTML = this.render(markup, { title: 'Lingvist' });
    show(templateHTML);

    this.insertElementsAfterRender();
    this.bindEventListeners();
  }
}

export default new Lingvist();
