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

    // this.gui.bindTestField(this.model.updateWords.bind(this.model));

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
