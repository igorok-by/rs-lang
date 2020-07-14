import markup from './EnglishPuzzle.html';
import StatusBar from './statusBar';
import GameField from './gameField';
import PiecesBar from './piecesBar';
import PromptBar from './promptBar';
import ControlButtonsBar from './controlButtonsBar';
import StartWindow from './startWindow';
import './styles.scss';
import { settingsTypes, PICTURE_SOURCES } from '../../../constants';

class GUI {
  constructor(view) {
    this.view = view;
    this.statusBar = new StatusBar(view);
    this.promptBar = new PromptBar(view);
    this.gameField = new GameField(view);
    this.piecesBar = new PiecesBar(view);
    this.controlButtonsBar = new ControlButtonsBar(view);
    this.startWindow = new StartWindow(view);

    this.currentRow = NaN;
    this.picture = '';
  }

  getElementIndex(element) {
    const rowElements = this.gameField.puzzleElemetns[this.currentRow];

    return rowElements.findIndex((el) => el === element);
  }

  displayRowPieces(rowNumber) {
    const rowElements = this.gameField.getPiecesByRow(rowNumber).slice();

    GUI.shake(rowElements);

    rowElements.forEach(this.piecesBar.append.bind(this.piecesBar));

    this.currentRow = rowNumber;
  }

  readyToNext() {
    this.controlButtonsBar.hideDontKnowButton();
    this.controlButtonsBar.changeToContinue();
  }

  async showLevel(level, sentences) {
    [this.picture] = PICTURE_SOURCES[level];

    await this.gameField.createPuzzle(this.picture, sentences);

    this.gameField.hidePicture();

    this.promptBar.showAll();

    this.piecesBar.clear();

    this.controlButtonsBar.changeToCheck();

    this.controlButtonsBar.showDontKnowButton();

    this.startWindow.hideWindow();
  }

  finishLevel(level) {
    const [, describe] = PICTURE_SOURCES[level];

    this.gameField.showPicture(this.picture);

    this.piecesBar.showText(describe);

    this.promptBar.hideAll();

    this.controlButtonsBar.hideDontKnowButton();

    this.controlButtonsBar.changeToNextLevel();
  }

  getUI() {
    const statusBar = this.statusBar.render();
    const promptBar = this.promptBar.render();
    const gameField = this.gameField.render();
    const piecesBar = this.piecesBar.render();
    const controlButtonsBar = this.controlButtonsBar.render();
    const startWindow = this.startWindow.render();

    return this.view.render(markup, {
      title: 'ENGLISH PUZZLE',
      startWindow,
      statusBar,
      promptBar,
      gameField,
      piecesBar,
      controlButtonsBar,
    });
  }

  addPieceToFieldRow(element) {
    this.gameField.addPieceToRow(this.currentRow, element);
  }

  removePieceFromGameField(element) {
    const rowPieces = this.gameField.getPiecesByRow(this.currentRow);
    const isPieceOfCurrentRow = rowPieces.find((el) => el === element);

    if (isPieceOfCurrentRow) {
      this.piecesBar.append(element);
    }
  }

  checkCurrentRow() {
    this.gameField.showWrong(this.currentRow);
  }

  setInCorrectOrder() {
    this.gameField.setInCorrectOrder(this.currentRow);
  }

  settingsChange(type, activate) {
    this.statusBar.displaySettings(type, activate);

    switch (type) {
      case settingsTypes.AUTO_PRONUNCIATION:
        break;
      case settingsTypes.TRANSLATE:
        this.promptBar.displayTranslation(activate);
        break;
      case settingsTypes.PHRASE_PRONUNCIATION:
        this.promptBar.displaySpeaker(activate);
        break;
      case settingsTypes.BKG_PICTURE:
        if (activate) {
          this.gameField.showBackgroundPicture(this.picture);
        } else {
          this.gameField.hideBackgroundPicture();
        }
        break;
      default:
    }
  }

  static shake(array) {
    array.sort(() => Math.random() - 0.5);

    return array;
  }
}

export default GUI;
