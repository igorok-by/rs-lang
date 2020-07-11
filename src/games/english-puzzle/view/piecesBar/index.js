import PiecesBar from './PiecesBar.html';
import TextElement from './Text.html';
import './styles.scss';

class Pieces {
  constructor(view) {
    this.view = view;
  }

  init({ onClick }) {
    this.bar = this.view.getElement('.english-puzzle__pieces-bar');

    this.bindElementClick(onClick);
  }

  append(element) {
    const { style } = element;

    style.margin = '5px';

    this.bar.append(element);
  }

  showText(text) {
    const textElement = this.view.render(TextElement, { text });

    this.clear();

    this.bar.innerHTML = textElement;
  }

  clear() {
    this.view.clearElement(this.bar);
  }

  bindElementClick(handler) {
    this.bar.addEventListener('click', ({ target }) => {
      const isCanvas = target instanceof HTMLCanvasElement;

      if (isCanvas) handler(target);
    });
  }

  render() {
    return this.view.render(PiecesBar);
  }
}

export default Pieces;
