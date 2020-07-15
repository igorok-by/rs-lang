import GUI from './view';
import EnglishPuzzleModel from './model';

class EnglishPuzzle {
  constructor(view, model) {
    this.gui = new GUI(view);
    this.model = new EnglishPuzzleModel(model);
    this.hash = 'englishPuzzle';
  }

  init() {
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
      onCorrect: this.gui.readyToNext.bind(this.gui),
    });
    this.gui.piecesBar.init({ onClick: this.gui.addPieceToFieldRow.bind(this.gui) });
    this.gui.controlButtonsBar.init({
      onDontknowClick: this.gui.setInCorrectOrder.bind(this.gui),
      onCheckClick: this.gui.checkCurrentRow.bind(this.gui),
      onContinueClick: this.model.showNextWord.bind(this.model),
      onNextLevelClick: this.model.nextLevel.bind(this.model),
    });

    this.gui.startWindow.init({ onStartClick: this.model.startGame.bind(this.model) });

    this.model.bindDisplaySettings(this.gui.settingsChange.bind(this.gui));
    this.model.bindDisplayPromptMessage(this.gui.promptBar.displayMessage.bind(this.gui.promptBar));
    this.model.bindDisplaySpeaker(this.gui.promptBar.displaySpeaker.bind(this.gui.promptBar));
    this.model.bindDisplayTranslation(
      this.gui.promptBar.displayTranslation.bind(this.gui.promptBar),
    );
    this.model.bindDisplayLevel(this.gui.showLevel.bind(this.gui));
    this.model.bundDisplayRowPieces(this.gui.displayRowPieces.bind(this.gui));
    this.model.bindDisplayFinish(this.gui.finishLevel.bind(this.gui));

    this.gui.startWindow.showWindow();
  }

  stop(){
    console.log('STOP');
  }
  /**
   *
   * @param show Function to insert HTML to main section
   */
  display(show) {
    console.log('eng puzzle display')
    const html = this.gui.getUI();

    show(html);

    this.init();
  }
}

export default EnglishPuzzle;
