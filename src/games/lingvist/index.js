import markup from './lingvist.html';
import './styles.scss';
import View from '../../services/view';

class Lingvist extends View {
  constructor() {
    super();
    this.name = 'lingvist';
  }

  display(params) {
    return this.render(markup, { title: 'LINGVIST' });
  }
}

export default new Lingvist();
