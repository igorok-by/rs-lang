/* eslint-disable class-methods-use-this */
class Router {
  constructor(controller) {
    this.controller = controller;
  }

  static getRouteInfo() {
    const hash = window.location.hash ? window.location.hash.slice(1) : '';
    const [name, id] = hash.split('/');

    return { name, params: { id } };
  }

  handleHash() {
    const { name, params } = Router.getRouteInfo();

    this.controller.show(name, params);
  }

  init() {
    window.addEventListener('hashchange', this.handleHash.bind(this));
    this.handleHash();
  }
}

export default Router;
