import Model from '../../../services/model';

class EnglishPuzzleModel extends Model {
  constructor() {
    super();
    this.words = [];
    this.count = 0;
    this.settings = {
      autoPronunciation: true,
      translate: true,
      pronunciation: true,
      picture: false,
    };
    this.inBasket = [];
    this.word = null;
    this.level = 0;
    this.play = null;
  }

  bindDisplayWords(cb) {
    this.displayWords = cb;
  }

  bindDisplaySettings(cb) {
    this.displaySettings = cb;
  }

  bindDisplayPromptMessage(cb) {
    this.displayPromptMessage = cb;
  }

  bindCreatePuzzleElements(cb) {
    this.createPuzzleElements = cb;
  }

  bundDisplayRowPieces(cb) {
    this.displayRowPieces = cb;
  }

  async getNextWords() {
    const words = await this.getWords();

    this.words = words.slice(0, 10);

    return this.words;
  }

  showNextWord() {
    const index = this.getCurrentWordIndex();
    const newIndex = index + 1;
    this.word = this.words[newIndex];

    this.displayRowPieces(newIndex);
  }

  getLevel() {
    return Math.round(Math.random() * 10);
  }

  async startGame() {
    this.words = await this.getNextWords();
    const sentences = this.words.map((word) => word.textMeaning);

    await this.createPuzzleElements(this.level, sentences);

    this.showNextWord();
  }

  settingsChange(setting) {
    const hasOwn = Object.prototype.hasOwnProperty;

    if (hasOwn.call(this.settings, setting)) {
      this.settings[setting] = !this.settings[setting];
      this.displaySettings(setting, this.settings[setting]);

      console.log('#model, @set setting ', setting, this.settings[setting]);
    }
  }

  levelChange(level) {
    console.log('#model, @levelChange: ', level);
  }

  pageChange(page) {
    console.log('#model, @pageChange : ', page);
  }

  getCurrentWordIndex(){
    return this.words.findIndex((el) => el === this.word);
  }

  pronounceMeaningTranslate() {
    this.displayPromptMessage(this.word.textMeaningTranslate);
    if (this.play) {
      this.play.pause();
    }

    this.play = this.playAudio(this.word.audioMeaning);
  }

  isCorrect(){

  }
  async updateWords() {
    const words = await this.getWords();

    this.displayWords(words.map(({ word }) => word));
  }
}

export default EnglishPuzzleModel;
