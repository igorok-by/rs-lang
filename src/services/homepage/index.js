import markup from './homepage.html';
import View from '../../services/view';
import Core from './js/scripts';
import Model from '../../services/model';
import './styles.scss';

class Homepage extends View {
  constructor(template, basic) {
    super();
    this.markup = template;
    this.core = basic;
    this.hash = 'Homepage';
  }



  display(show) {
    const html = this.render(this.markup, { title: 'Home' });
    show(html);
    this.core.init();
  }
}

export default new Homepage(markup, new Core(new Model()));
