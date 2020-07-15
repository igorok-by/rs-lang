import './styles/main.scss';
import Router from './services/route';
import Model from './services/model';
import View from './services/view';
import Controller from './services/controller';

(async () => {
  const controller = new Controller(new View(), new Model());
  const router = new Router(controller);
  controller.init();
  router.init();
})();
