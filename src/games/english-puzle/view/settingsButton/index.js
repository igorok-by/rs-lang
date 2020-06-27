import SettingsButton from './SettingsButton.html';
import './styles.scss';

class SettingsButtonController {
  constructor(view, model) {
    this.view = view;
  }

  init(){
    console.log( '@ SettingsButton: ' );
  }

  onClick(handler) {
    console.log('@onClick : >', handler);
  }

  render({ onClick }) {
    if (onClick) {
      this.onClick(onClick);
    }

    return this.view.render(SettingsButton);
  }
}

export default SettingsButtonController;
