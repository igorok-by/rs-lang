import Results from './Results.html';
import './styles.scss';

class ResultsController {
  constructor(view) {
    this.view = view;
    this.view.bindModalBackgroundClick();
  }

  init(){
    // this.results = this.view.getElement('.english-puzzle__results');
  }

  async show() {
    console.log( '@show : ' );
    const self = this;
    await this.view.showInModal(Results);

    console.log('onFinish');

    setTimeout(this.show.bind(this), 1000);
  }

  render() {
    return this.view.render(Results);
  }
}

export default ResultsController;
