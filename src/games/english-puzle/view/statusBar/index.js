// import View from '../view';
import Html from './StatusBar.html';
import './styles.scss';

class StatusBar {
  constructor(view) {
    this.view = view;
  }

  init({ onChangeSettings, onChangeLevel, onChangePage }) {
    this.settings = this.view.getElement('.status-bar__buttons');
    this.levels = this.view.getElement('#english-puzzle-levels');
    this.pages = this.view.getElement('#english-puzzle-pages');

    this.bindSettingsButtons(onChangeSettings);
    this.bindLevel(onChangeLevel);
    this.bindPage(onChangePage);
  }

  bindSettingsButtons(handler) {
    this.settings.addEventListener('click', ({ target }) => {
      const { type } = target.dataset;

      handler(type);
    });
  }

  bindLevel(handler) {
    this.levels.addEventListener('change', ({target}) => {
      const { selectedIndex } = target;

      handler(selectedIndex);
    });
  }

  bindPage(handler) {
    this.pages.addEventListener('change', ({ target }) => {
      const { selectedIndex } = target;

      handler(selectedIndex);
    });
  }

  displaySettings(type, value) {
    const button = this.settings.querySelector(`[data-type="${type}"]`);

    if (value === true) {
      button.classList.add('status-bar__button_active');
    } else {
      button.classList.remove('status-bar__button_active');
    }
  }

  render() {
    return this.view.render(Html);
  }
}

export default StatusBar;
