import Settings from './Settings.html';
import './styles.scss';

class SettingsHandler {
  constructor(view) {
    this.view = view;
    this.html = this.view.render(Settings);
  }

  init({ onSettingChange }) {
    this.onSettingChange = onSettingChange;
  }

  display(settings) {
    const settingsEntrires = Object.entries(settings).map(([key, value]) => {
      let newValue = value;

      if (typeof value === 'boolean') {
        newValue = value ? 'checked' : '';
      }

      return [key, newValue];
    });
    const htmlSettings = Object.fromEntries(settingsEntrires);
    const html = this.view.render(Settings, htmlSettings);

    this.view.showInModal(html);

    this.checkList = this.view.getElement('.app-settings__list');
    this.close = this.view.getElement('.settings__close');

    this.close.addEventListener('click', () => {
      this.view.hideModal();
    });

    this.bindSettingChange(this.onSettingChange);
  }

  bindSettingChange(handler) {
    this.checkList.addEventListener('change', ({
      target: {
        id, type, value, checked,
      },
    }) => {
      if (typeof handler === 'function') {
        switch (type) {
          case 'number':
            handler(id, value);
            break;
          case 'checkbox':
            handler(id, checked);
            break;
          default:
        }
      }
    });
  }

  render() {
    return this.view.render(Settings);
  }
}

export default SettingsHandler;
