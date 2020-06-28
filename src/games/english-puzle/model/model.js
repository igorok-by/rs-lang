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
    this.word = {
      id: '5e9f5ee35eb9e72bc21af4af',
      group: 0,
      page: 0,
      word: 'typical',
      image: 'files/01_0016.jpg',
      audio: 'files/01_0016.mp3',
      audioMeaning: 'files/01_0016_meaning.mp3',
      audioExample: 'files/01_0016_example.mp3',
      textMeaning: 'If something is <i>typical</i>, it is normal, or something that usually happens.',
      textExample: 'My <b>typical</b> breakfast is toast and eggs.',
      transcription: '[típikəl]',
      textExampleTranslate: 'Мой типичный завтрак - тост и яйца',
      textMeaningTranslate: 'Если что-то типичное, это нормально, или что-то, что обычно происходит',
      wordTranslate: 'типичный',
      wordsPerExampleSentence: 7,
    };
    this.levels = [];
    this.pages = [];
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

  settingsChange(setting) {
    const hasOwn = Object.prototype.hasOwnProperty;

    if (hasOwn.call(this.settings, setting)) {
      this.settings[setting] = !this.settings[setting];
      this.displaySettings(setting, this.settings[setting]);

      console.log( '#model, @set setting ', setting, this.settings[setting] );
    }
  }

  levelChange(level){
    console.log( '#model, @levelChange: ', level);
  }

  pageChange(page){
    console.log( '#model, @pageChange : ', page);
  }

  pronounceExampleTranslate() {
    this.displayPromptMessage(this.word.textExampleTranslate)
    if (this.play) {
      this.play.pause();
    }

    this.play = this.playAudio(this.word.audioExample);
  }

  async updateWords() {
    const words = await this.getWords();

    this.displayWords(words.map(({ word }) => word));
  }
}

export default EnglishPuzzleModel;
