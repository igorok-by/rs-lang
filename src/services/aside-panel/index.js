import Markup from './AsidePanel.html';
import NavigationItem from './navigation-item/index';
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
