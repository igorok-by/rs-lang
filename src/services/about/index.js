import markup from './about.html';
import View from '../../services/view';
import Core from './js/scripts';
import Model from '../../services/model';
import './styles.scss';

class About {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.markup = markup;
    this.core = new Core(view, model);
    this.hash = 'About';
  }



  display(show) {
    console.log("about");
    const html = this.view.render(this.markup, { title: 'About' });
    this.view.showInModal(html);
    this.core.init();
  }
}
export default About;