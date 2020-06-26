import markup from './lingvist.html';
import './styles.scss';
import View from '../../services/view';
import MainModel from '../../services/model';

class Lingvist extends View {
  constructor() {
    super();
    this.name = 'lingvist';
    this.mainModel = new MainModel();
    this.scopeOfWords = [];
    this.hash = this.name;
  }

  async getWords() {
    const words = await this.mainModel.getWords({ group: 0, page: 2 });
    return words;
  }

  async renderTemplate() {
    this.scopeOfWords = await this.getWords();
    const phrase = this.scopeOfWords[0].word;
    const translated = this.scopeOfWords[0].wordTranslate;

    return this.render(markup, {
      title: 'LINGVIST',
      phrase,
      translated,
    });
  }

  async display(show) {
    const templateHTML = await this.renderTemplate();

    show(templateHTML);
  }
}

export default new Lingvist();
