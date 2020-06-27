import markup from './EnglishPuzzle.html';
import './styles.scss';
import View from '../../services/view';

class GUI extends View {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.testField = this.getElement('.english-puzzle__test-field');
  }

  displayWords(words) {
    this.testField.innerHTML = words.map((word, i) => `<p>${i}. ${word}</p>`).join('');
  }

  bindTestField(handle) {
    this.testField.addEventListener('click', () => {
      handle();
    });
  }

  getUI() {
    return this.render(markup, { title: 'ENGLISH PUZZLE' });
  }
}

export default GUI;
