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

    this.levels = [];
    this.pages = [];
  }

  bindDisplayWords(cb) {
    this.displayWords = cb;
  }

  bindDisplaySettings(cb) {
    this.displaySettings = cb;
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
    console.log( '@levelChange : ', level );
  }

  pageChange(page){
    console.log( '@pageChange : ', page );
  }

  async updateWords() {
    const words = await this.getWords();

    this.displayWords(words.map(({ word }) => word));
  }
}

export default EnglishPuzzleModel;
