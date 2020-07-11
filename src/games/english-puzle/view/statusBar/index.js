// import View from '../view';
import StatusBar from './StatusBar.html';
import SettingsButton from './settingsButton';
import './styles.scss';
import { settingsTypes } from '../../../../constants';

class StatusBarView {
  constructor(view) {
    this.view = view;
    this.settingsButtonsTypes = [
      [settingsTypes.AUTO_PRONUNCIATION, 'play_circle_filled'],
      [settingsTypes.TRANSLATE, 'speaker_notes'],
      [settingsTypes.PHRASE_PRONUNCIATION, 'volume_up'],
      [settingsTypes.BKG_PICTURE, 'image'],
    ];
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
      const { tagName } = target;
      let { type } = target.dataset;

      if (tagName === 'I') {
        const element = target.closest('.status-bar__button');

        type = element.dataset.type;
      }

      handler(type);
    });
  }

  bindLevel(handler) {
    this.levels.addEventListener('change', ({ target }) => {
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
    const settingsButtons = this.settingsButtonsTypes.map((el) => this.view.render(SettingsButton, {
      // text: i,
      activeClass: '',
      type: el[0],
      icon: el[1],
    }));

    return this.view.render(StatusBar, { settingsButtons });
  }
}

export default StatusBarView;
