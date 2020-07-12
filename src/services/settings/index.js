import Settings from './Settings.html';

class SettingsHandler {
  constructor(view){
    this.view = view;
  }

  init(){

  }

  display() {
    const html = this.view.render(Settings);

    this.view.showInModal(html);
  }

  render() {
    return this.view.render(Settings);
  }
}

export default SettingsHandler;