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
    this.gui.init({
      onSettings: this.model.settingsChange.bind(this.model),
      onLevel: this.model.levelChange.bind(this.model),
      onPage: this.model.pageChange.bind(this.model),
    });

    // this.gui.bindTestField(this.model.updateWords.bind(this.model));
    // this.
    this.model.bindDisplaySettings(this.gui.statusBar.displaySettings.bind(this.gui.statusBar));
    this.model.bindDisplayWords(this.gui.displayWords.bind(this.gui));
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
