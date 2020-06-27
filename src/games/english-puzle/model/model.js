import Model from '../../../services/model';

class EnglishPuzzleModel extends Model {
  constructor() {
    super();
    this.words = [];
    this.count = 0;
  }

  bindDisplayWords(cb) {
    this.displayWords = cb;
  }

  async updateWords() {
    const words = await this.getWords();

    this.displayWords(words.map(({ word }) => word));
  }
}

export default EnglishPuzzleModel;
