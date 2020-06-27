import markup from './EnglishPuzzle.html';
import StatusBar from './statusBar';
import gameField from './gameField';
import answerBar from './answerBar';
import hintsBar from './hintsBar';
import controlButtonsBar from './controlButtonsBar';
import './styles.scss';
import View from '../../../services/view';

class GUI extends View {
  constructor() {
    super();
    this.statusBar = new StatusBar(this);
  }

  init({ onSettings, onLevel, onPage }) {
    this.testField = this.getElement('.english-puzzle__test-field');
    this.statusBar.init({ onSettings, onLevel, onPage });
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
    const statusBar = this.statusBar.render();

    return this.render(markup, {
      title: 'ENGLISH PUZZLE',
      statusBar,
      hintsBar,
      gameField,
      answerBar,
      controlButtonsBar,
    });
  }
}

export default GUI;
