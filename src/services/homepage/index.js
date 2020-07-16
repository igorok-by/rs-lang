import markup from './homepage.html';
import Core from './js/scripts';
import './styles.scss';

class Homepage {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.markup = markup;
    this.core = new Core(view);
    this.hash = 'Homepage';
  }

  display(show) {
    const html = this.view.render(this.markup, { title: 'Home' });
    show(html);
    this.core.init();
  }
}

export default Homepage;
