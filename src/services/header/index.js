import Header from './Header.html';
import './styles.scss';

class HeaderHandler {
  constructor(view) {
    this.view = view;
    this.header = this.view.getElement('.app-header');
  }

  init({ onSettings, onLogin }) {
    console.log( '@header init : ' );
    this.view.showIn(this.header, Header);

    this.container = this.view.getElement('.app-header__container');
    this.loginButton = this.view.getElement('.app-header__button_login');
    this.settingsButton = this.view.getElement('.app-header__button_settings');

    this.bindLoginClick(onLogin);
    this.bindSettingsClick(onSettings);
  }

  bindSettingsClick(handler) {
    this.settingsButton.addEventListener('click', () => {
      handler();
    });
  }

  bindLoginClick(handler) {
    this.loginButton.addEventListener('click', () => {
      handler();
    });
  }

  render() {
    return this.view.render(Header);
  }
}

export default HeaderHandler;
