import GUI from './view/index';
import Model from './model/model';

class EnglishPuzzle {
  constructor(gui, model) {
    this.gui = gui;
    this.model = model;
    this.hash = 'englishPuzzle';
  }

  init() {
    console.log( '@index.js init : ' );
    this.gui.init();
    this.gui.statusBar.init({
      onChangeSettings: this.model.settingsChange.bind(this.model),
      onChangeLevel: this.model.levelChange.bind(this.model),
      onChangePage: this.model.pageChange.bind(this.model),
    });
    this.gui.promptBar.init({
      onSpeakerClick: this.model.pronounceExampleTranslate.bind(this.model),
    });
    this.gui.gameField.init();


    this.model.bindDisplaySettings(this.gui.statusBar.displaySettings.bind(this.gui.statusBar));
    this.model.bindDisplayWords(this.gui.displayWords.bind(this.gui));
    this.model.bindDisplayPromptMessage(this.gui.promptBar.displayMessage.bind(this.gui.promptBar));
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
