import PiecesBar from './PiecesBar.html';
import './styles.scss';

class Pieces {
  constructor(view) {
    this.view = view;
  }

  init({ onClick }) {
    this.bar = this.view.getElement('.english-puzzle__pieces-bar');
    this.bindElementClick(onClick);
    // this.bar.addEventListener('click', ({ target }) => {
    //   const isCanvas = target instanceof HTMLCanvasElement;
    //
    //   if (isCanvas) onClick(target);
    // });
  }

  append(element) {
    const { style } = element;

    style.margin = `5px`;
    // style.left = 0;

    this.bar.append(element);
  }

  remove(element){

  }

  bindElementClick(handler){
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
