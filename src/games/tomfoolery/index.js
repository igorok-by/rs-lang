import markup from './tomfoolery.html';
import View from '../../services/view';
import Core from './js/scripts';
import Model from '../../services/model';
import './styles.scss';

class Tomfoolery extends View {
  constructor(template, basic) {
    super();
    this.markup = template;
    this.core = basic;
    this.hash = 'Tomfoolery';
  }
  stop() {
    this.core.stop();
  }


  display(show) {
    const html = this.render(this.markup, { title: 'Tomfoolery!' });
    show(html);
    this.core.init();
  }
}

export default new Tomfoolery(markup, new Core(new Model()));
