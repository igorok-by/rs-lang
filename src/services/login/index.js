/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import markup from './Login.html';
import './styles.scss';
import Model from '../model';

const USER = { email: 'hello1111@user.com', password: 'Gfhjkm_123' };

class Login {
  constructor(view, model) {
    this.view = view;
    this.model = new Model();
  }

  async display() {
    this.show();
    const res = await this.model.createUser(USER).catch((e) => {
      console.log(e.response);
    });

    console.log(res);
  }

  show() {
    this.view.showInModal(markup);

    this.closeElement = this.view.getElement('.login__close');
    console.log(this.closeElement);
    this.closeElement.addEventListener('click', this.view.hideModal.bind(this));
  }
}

export default Login;
