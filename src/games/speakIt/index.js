import markup from './SpeakIt.html';
import View from '../../services/view';
import Model from '../../services/model';
import './styles.scss';

const model = new Model();

class SpeakIt extends View {
  constructor() {
    super();
    this.hash = 'speakIt';
  }

  async init() {
    const testItem = this.getElement('.intro-text');
    console.log(testItem);
    const words = await model.getWords();

    console.log(words);
  }

  /**
   * @param params Object
   * @returns html
   */
  display(show) {
    const html = this.render(markup, { title: 'Speak It!' });

    show(html);
    this.init();
  }
}

export default new SpeakIt();
