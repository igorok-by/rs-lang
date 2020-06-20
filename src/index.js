import './styles/main.scss';
import './aside-panel';
// import View from './scripts/view';
// import Model from './scripts/model';
import Router from './scripts/route';

const USER = { email: 'test_user@gmail.com', password: 'Gfhjkm_123' };

(async () => {
  Router.init();
  // let user = await Model.login(USER);
  // if (!user) {
  //   user = await Model.createUser(USER);
  // }

  // View.render(`
  //   <h1 class="">${user.userId}</h1>
  // `, 'main');

  //await Model.login(USER) ||
  // console.log('user', user);
})();
