import Markup from './AsidePanel.html';
import NavigationItem from './navigation-item';

class NavigationPanel {
  constructor(view) {
    this.view = view;
    this.asidePanel = this.view.getElement('.app-panel');
  }

  addNavigationItem(game) {
    const itemHtml = this.view.render(NavigationItem, game);

    this.asideElements.insertAdjacentHTML('beforeend', itemHtml);
  }

  init() {
    this.view.showIn(this.asidePanel, Markup);

    this.asideElements = this.view.getElement('.app-panel__elements');
  }
}

export default NavigationPanel;
