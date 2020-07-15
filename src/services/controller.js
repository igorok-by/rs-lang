/* eslint-disable class-methods-use-this */
import Model from './model';
import View from './view';
import SpeakIt from '../games/speakIt/index';
import EnglishPuzzle from '../games/english-puzzle/index';
import Lingvist from '../games/lingvist/index';
import AudioCall from '../games/audio-call';
import Sprint from '../games/sprint';
import Tomfoolery from '../games/tomfoolery';
import About from '../services/about/index';
// USER для теста
const USER = { email: 'test_user_random@gmail.com', password: 'Gfhjkm_123' };
//
class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.games = [
      SpeakIt,
      EnglishPuzzle,
      Lingvist,
      AudioCall,
      Sprint,
      Tomfoolery,
      About,
    ];

    this.games.forEach(this.view.asidePanel.addNavigationItem.bind(this.view.asidePanel));
  }

  show(hash, params) {
    if (hash) {
      switch (hash) {
        case 'login':
          this.view.login.display(params);
          break;
        case 'settings':
          this.view.settings.display(params);
          break;
        default:
          this.showGame(hash);
      }
    }
  }

  showGame(name) {
    const game = this.games.find((el) => el.hash === name);
    if (game) {
      this.games.forEach((el) => {
        if (typeof el.stop === 'function') {
          el.stop();
        }
      });
      game.display(this.view.showInMain.bind(this.view));
    } else {
      throw new Error(`There is no game by name ${name}`);
    }
  }
}

export default new Controller(new View(), new Model());
