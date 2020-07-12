import GUI from './js/view';
import Model from './js/model';

class EnglishPuzzle {
  constructor(gui, model) {
    this.gui = gui;
    this.model = model;
    this.hash = 'englishPuzzle';
  }

  init() {
    this.gui.init();

    this.gui.bindTestField(this.model.updateWords.bind(this.model));

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
