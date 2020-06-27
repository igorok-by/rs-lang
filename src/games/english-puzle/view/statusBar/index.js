// import View from '../view';
import Html from './StatusBar.html';
import './styles.scss';

class StatusBar {
  constructor(view, model) {
    this.view = view;
    this.autoPronunciation = true;
    this.hints = {
      translate: true,
      pronunciation: true,
      picture: false,
    };
    this.levels = [];
    this.pages = [];
  }

  init({ onSettings, onLevel, onPage }) {
    console.log('@ StatusBar init : ');
    this.settings = this.view.getElement('.status-bar__buttons');
    this.levels = this.view.getElement('#english-puzzle-levels');
    this.pages = this.view.getElement('#english-puzzle-pages');

    this.bindSettingsButtons(onSettings);
    this.bindLevel(onLevel);
    this.bindPage(onPage);
    console.log('StatusBar', this.settings);
  }

  bindSettingsButtons(handler) {
    this.settings.addEventListener('click', ({ target }) => {
      console.log(target);
      handler(target);
    });
  }

  bindLevel(handler) {
    this.settings.addEventListener('select', ({ target }) => {
      console.log(target);
      handler(target);
    });
  }

  bindPage(handler) {
    this.pages.addEventListener('select', ({ target }) => {
      console.log(target);
      handler(target);
    });
  }

  render() {
    return this.view.render(Html);
  }
}

export default StatusBar;
