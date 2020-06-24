import './styles/main.scss';
import NavigationPanel from './services/aside-panel';
import Router from './services/route';

(async () => {
  NavigationPanel.init();
  Router.init();
})();
