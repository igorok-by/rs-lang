import markup from './about.html';
import View from '../../services/view';
import Core from './js/scripts';
import Model from '../../services/model';
import './styles.scss';

class About extends View {
  constructor(template, basic) {
    super();
    this.markup = template;
    this.core = basic;
    this.hash = 'About';
  }



  display(show) {
    const html = this.render(this.markup, { title: 'About' });
    show(html);

  }
}

export default new About(markup, new Core(new Model()));
