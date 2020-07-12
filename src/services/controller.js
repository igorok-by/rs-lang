/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Model from './model';
import View from './view';
import Login from './login';
import SpeakIt from '../games/speakIt';
import EnglishPuzzle from '../games/english-puzzle';
import Lingvist from '../games/lingvist';
import AudioCall from '../games/audio-call';
import Sprint from '../games/sprint';
import Tomfoolery from '../games/tomfoolery';

// USER для теста
const USER = { email: 'test_user_random@gmail.com', password: 'Gfhjkm_123' };
//
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

    this.model.bindDisplayMainSettings(this.view.settings.display.bind(this.view.settings));
    this.model.bindDisplayLogin(this.login.show.bind(this.login));
    this.model.SettingsInit();
    // this.model.userInit();

    this.view.header.init({
      onSettings: this.view.settings.display.bind(this.view.settings, this.model.settings),
      onLogin: () => { console.log('onLogin'); },
    });

    this.view.settings.init({
      onSettingChange: this.model.mainSettingsChange.bind(this.model),
    });

    this.games.forEach(this.view.asidePanel.addNavigationItem.bind(this.view.asidePanel));
  }

  show(hash, params) {
    switch (hash) {
      case 'login':
        this.view.login.display(params);
        break;
      case 'settings':
        this.view.settings.display(this.model.settings);
        break;
      default:
        this.showGame(hash);
    }
  }

  showGame(name) {
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

  settingsChange() {
    // this.
  }
}

export default new Controller(new View(), new Model());
