/* eslint-disable class-methods-use-this */
import Controller from './controller';

class Router {
  static getRouteInfo() {
    const hash = window.location.hash ? window.location.hash.slice(1) : '';
    const [name, id] = hash.split('/');

    console.log('hash', hash);

    return { name, params: { id } };
  }

  static handleHash() {
    const { name, params } = Router.getRouteInfo();
    if (name === 'login') {
      Controller.login();
    } else if (name) {
      Controller.showGame(name);
    }
  }

  init() {
    console.log('router init');
    window.addEventListener('hashchange', Router.handleHash);
    Router.handleHash();
  }
}

export default new Router();
