import GUI from './view';
import Model from './model';

class EnglishPuzzle {
  constructor(gui, model) {
    this.gui = gui;
    this.model = model;
    this.hash = 'englishPuzzle';
    this.inBasket = [];
    this.puzzleElements = [];
  }

  init() {
    console.log('@index.js init : ');
    this.gui.init();
    this.gui.statusBar.init({
      onChangeSettings: this.model.settingsChange.bind(this.model),
      onChangeLevel: this.model.levelChange.bind(this.model),
      onChangePage: this.model.pageChange.bind(this.model),
    });
    this.gui.promptBar.init({
      onSpeakerClick: this.model.pronounceMeaningTranslate.bind(this.model),
    });
    this.gui.gameField.init({
      onElementClick: this.gui.removePieceFromGameField.bind(this.gui),
    });
    this.gui.piecesBar.init({ onClick: this.gui.addPieceToFieldRow.bind(this.gui) });

    this.model.bindDisplaySettings(this.gui.statusBar.displaySettings.bind(this.gui.statusBar));
    this.model.bindDisplayWords(this.gui.displayWords.bind(this.gui));
    this.model.bindDisplayPromptMessage(this.gui.promptBar.displayMessage.bind(this.gui.promptBar));
    this.model.bindCreatePuzzleElements(this.gui.createPuzzle.bind(this.gui));
    this.model.bundDisplayRowPieces(this.gui.displayRowPieces.bind(this.gui));

    this.model.startGame();
  }

  /**
   *
   * @param show Function to insert HTML to main section
   */
  display(show) {
    const html = this.gui.getUI();

    show(html);

    this.init();
  }
}

export default new EnglishPuzzle(new GUI(), new Model());
