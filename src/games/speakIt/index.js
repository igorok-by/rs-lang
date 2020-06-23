import markup from './SpeakIt.html';
import View from '../../services/view';
import './styles.scss';

class SpeakIt extends View {
  constructor() {
    super();
    this.name = 'speakIt';
  }

  /**
   * @param params Object
   * @returns html
   */
  display(params) {
    return this.render(markup, { title: 'Speak It!' });
  }
}

export default new SpeakIt();
