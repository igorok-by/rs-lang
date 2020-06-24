/* eslint-disable class-methods-use-this */
import Model from './model';
import View from './view';
import SpeakIt from '../games/speakIt/index';
import EnglishPuzzle from '../games/english-puzle/index';
import Login from './login/index';

// USER для теста
const USER = { email: 'test_user_random@gmail.com', password: 'Gfhjkm_123' };
const view = new View();
const model = new Model();

class Controller {
  constructor() {
    this.games = [
      SpeakIt,
      EnglishPuzzle,
    ];
  }

  showGame(hash, params) {
    const game = this.games.find((el) => el.hash === hash);
    if (game) {
      game.display(view.showIn.bind(view, 'main'));
    } else {
      throw new Error(`There is no game by name ${hash}`);
    }
  }

  login() {
    Login.display();
  }
}

export default new Controller();
