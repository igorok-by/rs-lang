/* eslint-disable class-methods-use-this */
import View from './view';
import Model from './model';

const USER = { email: 'hello1111@user.com', password: 'Gfhjkm_123' };

class Login {
  async display() {
    View.show();
    const res = await Model.createUser(USER).catch((e) => {
      console.log(e.response);
    });

    console.log(res);
  }
}

export default new Login();
