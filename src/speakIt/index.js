import markup from './index.html';
import View from '../scripts/view';
import './styles.scss';

export default {
  render(data) {
    return View.render(markup, data);
  },
};
