import markup from './index.html';
import './styles.scss';
import View from '../scripts/view';

export default {
  render(data){
    return View.render(markup, data);
  }
}
