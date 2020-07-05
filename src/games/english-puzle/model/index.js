import Model from '../../../services/model';
import { settingsTypes } from '../../../constants';

const s = settingsTypes;

class EnglishPuzzleModel extends Model {
  constructor() {
    super();
    this.words = [];
    this.wordsOnPage = 10;
    this.count = 0;
    this.settings = {
      [s.AUTO_PRONUNCIATION]: true,
      [s.TRANSLATE]: true,
      [s.PHRASE_PRONUNCIATION]: true,
      [s.BKG_PICTURE]: false,
    };
    this.word = null;
    this.level = 0;
    this.pagesLimit = 30;
    this.levelsLimit = 5;
    this.play = null;
  }

  bindDisplaySettings(cb) {
    this.displaySettings = cb;
  }

  bindDisplayPromptMessage(cb) {
    this.displayPromptMessage = cb;
  }

  bindDisplaySpeaker(cb) {
    this.displaySpeaker = cb;
  }

  bindDisplayTranslation(cb) {
    this.displayTranslation = cb;
  }

  bindDisplayLevel(cb) {
    this.displayLevel = cb;
  }

  bundDisplayRowPieces(cb) {
    this.displayRowPieces = cb;
  }

  bindDisplayFinish(cb) {
    this.displayFinish = cb;
  }

  async getNextWords() {
    const group = this.level;
    const page = Math.floor(Math.random() * Math.floor(this.pagesLimit));
    const words = await this.getWords({ group, page });

    this.words = words
      .filter((word) => word.textExample.split(' ').length <= 10)
      .slice(0, this.wordsOnPage)
      .sort(() => Math.random() - 0.5);

    return this.words;
  }

  async showNextWord() {
    const isAutoPronunciation = this.getSetting(s.AUTO_PRONUNCIATION);
    const isTranslate = this.getSetting(s.TRANSLATE);
    const index = this.getCurrentWordIndex();
    const newIndex = index + 1;

    if (!isTranslate) {
      this.displayTranslation();
    }

    if (!isAutoPronunciation) {
      await this.pronounceMeaningTranslate();
    }

    if (newIndex < this.wordsOnPage) {
      this.word = this.words[newIndex];
      this.displayRowPieces(newIndex);
      this.displayPromptMessage(this.word.textExampleTranslate);

      if (isAutoPronunciation) {
        await this.pronounceMeaningTranslate();
      }

      this.settingsInit();
    } else {
      this.theEndOfLevel();
    }
  }

  async nextLevel() {
    if (this.level < this.levelsLimit) {
      this.level += 1;
      await this.startGame();
    }
    console.log('nextLevel', this.level);
  }

  async theEndOfLevel() {
    this.displayFinish(this.level);
  }

  async startGame() {
    this.words = await this.getNextWords();

    const sentences = this.words.map((word) => word.textExample);

    await this.displayLevel(this.level, sentences);

    this.showNextWord();

    this.settingsInit();
  }

  settingsInit() {
    const settings = Object.entries(this.settings);

    settings.forEach(([type, value]) => this.settingsChange(type, value));
  }

  settingsChange(type, value) {
    const hasOwn = Object.prototype.hasOwnProperty;

    if (hasOwn.call(this.settings, type)) {
      const valueToSet = typeof value === 'boolean' ? value : !this.settings[type];
      this.settings[type] = valueToSet;
      this.displaySettings(type, valueToSet);
    }
  }

  getSetting(type) {
    return this.settings[type];
  }

  levelChange() {
    console.log(this.level);
  }

  pageChange() {
    console.log(this.page);
  }

  getCurrentWordIndex() {
    return this.words.findIndex((el) => el === this.word);
  }

  async pronounceMeaningTranslate() {
    if (this.play) {
      await this.play.pause();
    }
    this.play = this.playAudio(this.word.audioExample);

    return new Promise((resolve) => this.play.addEventListener('ended', resolve));
  }
}

export default EnglishPuzzleModel;
