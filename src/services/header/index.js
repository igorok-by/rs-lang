import Markup from './Header.html';
import Controller from '../controller';
import View from '../view';

class NavigationPanel extends View {
  init() {
    const elements = Controller.games.map((game) => this.render(NavigationItem, game));
    const html = this.render(Markup, { elements });

    this.showIn('panel', html);
  }
}

export default new NavigationPanel();
