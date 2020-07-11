import markup from './StartWindow.html';
import './styles.scss';

class StartWindow {
  constructor(view) {
    this.view = view;
  }

  init(){
    // this.results = this.view.getElement('.english-puzzle__results');
  }

  render() {
    return this.view.render(markup);
  }
}

export default StartWindow;
