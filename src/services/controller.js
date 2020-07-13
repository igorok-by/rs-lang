import Login from './login';
import SpeakIt from '../games/speakIt';
import EnglishPuzzle from '../games/english-puzzle';
import Lingvist from '../games/lingvist';
import AudioCall from '../games/audio-call';
import Sprint from '../games/sprint';
import Tomfoolery from '../games/tomfoolery';

class Controller {
  constructor(view, model) {
    this.mainGame = Lingvist;
    this.view = view;
    this.model = model;
    this.login = new Login(this.view, this.model);
    this.games = [
      Lingvist,
      SpeakIt,
      EnglishPuzzle,
      AudioCall,
      Sprint,
      Tomfoolery,
    ];

    this.isInit = false;
  }

  async init() {
    this.view.header.init({
      onSettings: this.showSettings.bind(this),
      onLogin: this.loginToggle.bind(this),
    });

    this.view.settings.init({
      onSettingChange: this.model.mainSettingsChange.bind(this.model),
    });

    this.games.forEach(this.view.asidePanel.addNavigationItem.bind(this.view.asidePanel));

    this.model.bindDisplayMainPage(this.showGame.bind(this));

    this.model.bindDisplayMainSettings(this.view.settings.display.bind(this.view.settings));
    this.model.bindDisplayLogin(this.login.display.bind(this.login));
    this.model.bindSignedFinish(this.initFinish.bind(this));

    this.model.userInit();
  }

  showSettings() {
    this.view.settings.display(this.model.settings);
  }

  loginToggle() {
    if (this.model.userId) {
      this.model.logout();
      this.view.header.changeLoginedTo(false);
      this.view.showIn(this.view.main, '');

      this.isInit = false;
    }

    this.login.display();
  }

  async initFinish() {
    if (!this.isInit) {
      this.isInit = true;
      this.view.header.changeLoginedTo(true);

      await this.model.SettingsInit();

      this.showGame();
    }
  }

  show(hash, params) {
    if (this.isInit) {
      switch (hash) {
        case 'login':
          this.login.display(params);
          break;
        case 'settings':
          this.view.settings.display(this.model.settings);
          break;
        default:
          this.showGame(hash);
      }
    }
  }

  showGame(name) {
    console.log('showGame');
    let game = this.games.find((el) => el.hash === name);

    if (!game) {
      game = this.mainGame;
    }

    this.games.forEach((el) => {
      if (typeof el.stop === 'function') {
        el.stop();
      }
    });
    game.display(this.view.showInMain.bind(this.view));
  }

}

export default Controller;
