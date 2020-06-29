/* eslint-disable no-unused-vars */
import markup from './EnglishPuzzle.html';
import './styles.scss';
import View from '../../services/view';

class SpeakIt extends View {
  constructor() {
    super();
    this.name = 'englishPuzzle';
  }

  display(params) {
    return this.render(markup, { title: 'ENGLISH PUZZLE' });
  }
}

export default new SpeakIt();
