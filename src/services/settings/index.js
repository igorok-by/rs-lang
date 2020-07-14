import Settings from './Settings.html';
import './styles.scss';

class SettingsHandler {
  constructor(view) {
    this.view = view;
    this.html = this.view.render(Settings);
  }

  init({ onSettingChange, onClose }) {
    this.onSettingChange = onSettingChange;
    this.onClose = onClose;
  }

  display(data) {
    const { wordsPerDay, optional } = data;
    const optionalEntries = Object.entries(optional).map(([key, value]) => {
      let insert = value;

      if (typeof value === 'boolean') {
        insert = value ? 'checked' : '';
      }

      return [key, insert];
    });

    optionalEntries.push(['wordsPerDay', wordsPerDay]);

    const htmlSettings = Object.fromEntries(optionalEntries);
    const html = this.view.render(Settings, htmlSettings);

    console.log(html, htmlSettings)

    this.view.showInModal(html);

    this.checkList = this.view.getElement('.app-settings__list');
    this.close = this.view.getElement('.settings__close');

    this.close.addEventListener('click', () => {
      this.view.hideModal();
      this.onClose();
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
