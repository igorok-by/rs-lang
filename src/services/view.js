/* eslint-disable class-methods-use-this */
import baseView from '../utils/baseView';
import Header from './header';

import Settings from './settings';
import NavigationPanel from './aside-panel';

class View extends baseView {
  constructor() {
    super();
    this.name = '';
    this.header = new Header(this);

    this.settings = new Settings(this);
    this.asidePanel = new NavigationPanel(this);
    this.main = this.getElement('.app-main');
    // this.panel = this.getElement('.app-panel');
    this.panelHeader = this.getElement('.app-panel-header');
    this.modal = this.getElement('.app-modal');
    this.modalContainer = this.getElement('.app-modal__container');

    this.asidePanel.init();
  }

  render(template, data) {
    const Markup = template.substr();

    if (data && typeof data === 'object') {
      return Object.keys(data).reduce((acc, prop) => {
        const re = new RegExp(`{{${prop}}}`, 'g');
        const insertObject = data[prop];

        if (Array.isArray(insertObject)) {
          return acc.replace(re, insertObject.join(''));
        }

        return acc.replace(re, insertObject);
      }, Markup);
    }

    return template;
  }

  showIn(targetElement, html) {
    // const targetElement = this[targetElement];
    if (targetElement instanceof HTMLElement) {
      targetElement.innerHTML = html;
    }
  }

  showInMain(html) {
    this.showIn(this.main, html);
  }

  displaySettings() {

  }

  showInModal(html) {
    this.modalContainer.innerHTML = html;
    this.modal.classList.add('show');
  }

  hideModal() {
    this.modal.classList.remove('show');
  }

  clear() {
    this.modal.classList.remove('show');
    this.modal.innerHTML = '';
  }

  /**
   * @param params Object
   * @returns html String
   */
  display() {
    throw new Error('The method *display* have to redefined');
  }
}

export default View;
