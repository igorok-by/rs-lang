import Settings from './Settings.html';
import './styles.scss';

class SettingsHandler {
  constructor(view) {
    this.view = view;
    this.html = this.view.render(Settings);
    this.settingsMem = null;
  }

  init({ onSettingChange }) {
    this.onSettingChange = onSettingChange;
  }

  display(settings) {
    const settingsEntires = Object.entries(settings).map(([key, value]) => {
      let newValue = value;

      if (typeof value === 'boolean') {
        newValue = value ? 'checked' : '';
      }

      return [key, newValue];
    });
    const htmlSettings = Object.fromEntries(settingsEntires);
    const html = this.view.render(Settings, htmlSettings);

    this.view.showInModal(html);

    this.checkList = this.view.getElement('.app-settings__list');
    this.close = this.view.getElement('.settings__close');

    this.checkList.addEventListener('change', ({
      target: {
        id, type, value, checked,
      },
    }) => {
      if (typeof this.onSettingChange === 'function') {
        switch (type) {
          case 'number':
            this.onSettingChange(id, value);
            break;
          case 'checkbox':
            this.onSettingChange(id, checked);
            break;
          default:
        }
      }
    });

    this.close.addEventListener('click', () => {
      this.view.hideModal();
    });

    this.settingsMem = settings;
  }

  bindSettingChange(onSettingChange) {
    this.onSettingChange = onSettingChange;
  }

  render() {
    return this.view.render(Settings);
  }
}

export default SettingsHandler;
