import markup from './tomfoolery.html';
import Core from './js/scripts';
import './styles.scss';

class Tomfoolery {
  constructor(view, model) {
    this.markup = markup;
    this.view = view;
    this.core = new Core(model);
    this.hash = 'Tomfoolery';
  }
  stop() {
    this.core.stop();
  }

  display(show) {
    const html = this.view.render(this.markup, { title: 'Tomfoolery!' });
    show(html);
    this.core.init();
  }
}

export default Tomfoolery;
