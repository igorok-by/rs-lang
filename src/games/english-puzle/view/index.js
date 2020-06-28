import markup from './EnglishPuzzle.html';
import StatusBar from './statusBar';
import GameField from './gameField';
import answerBar from './answerBar';
import PromptBar from './promptBar';
import controlButtonsBar from './controlButtonsBar';
import './styles.scss';
import View from '../../../services/view';

class GUI extends View {
  constructor() {
    super();
    this.statusBar = new StatusBar(this);
    this.promptBar = new PromptBar(this);
    this.gameField = new GameField(this);
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
    const statusBar = this.statusBar.render();
    const promptBar = this.promptBar.render();
    const gameField = this.gameField.render();

    return this.render(markup, {
      title: 'ENGLISH PUZZLE',
      statusBar,
      promptBar,
      gameField,
      answerBar,
      controlButtonsBar,
    });
  }
}

export default GUI;
