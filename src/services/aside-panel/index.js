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

  bindItemClick() {
    this.asideElements.addEventListener( 'click', ({target, currentTarget}) => {
      const elements = Array.from( currentTarget.children );
      const li = target.closest( 'li' );

      elements.forEach( (el) => el.classList.remove( 'item__active' ) );

      li.classList.add( 'item__active' );

      // console.log(elements.indexOf(target))
    } );
  }

  init() {
    this.view.showIn(this.asidePanel, Markup);

    this.asideElements = this.view.getElement('.app-panel__elements');

    this.bindItemClick();
  }
}

export default NavigationPanel;
