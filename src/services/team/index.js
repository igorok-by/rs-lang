import markup from './team.html';
import Core from './js/scripts';
import './styles.scss';

class Team {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.markup = markup;
    this.core = new Core(view, model);
    this.hash = 'Team';
  }

  display(show) {
    const html = this.view.render(this.markup, { title: 'Team' });
    this.view.showInModal(html);
    this.core.init(this.view, this.model);
  }
}
export default Team;
