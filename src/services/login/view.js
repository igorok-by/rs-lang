/* eslint-disable indent */
/* eslint-disable lines-between-class-members */
/* eslint-disable consistent-return */
/* eslint-disable quote-props */
import markup from './Login.html';
import View from '../view';
import Model from '../model';
import './styles.scss';

class LoginView extends View {
  show() {
    this.showInModal(markup);

    this.closeElement = this.getElement('.login__close');
    this.formWindow = this.getElement('.login__sign-up');
    this.closeElement.addEventListener('click', this.hideModal.bind(this));
    this.formWindow.addEventListener('submit', this.sendData);
  }
  sendData(e) {
    e.preventDefault();
    this.errorOutput = document.getElementById('error-output');
    const errorStatus = (status) => {
      switch (status) {
        case 417:
          this.errorOutput.textContent = 'This user already exists!';
          return false;
        case 422:
          this.errorOutput.textContent = 'Wrong email or password!';
          return false;
        case 404:
          this.errorOutput.textContent = 'This user not found!';
          return false;
        case 403:
          this.errorOutput.textContent = 'Wrong password!';
          return false;
        default:
          this.errorOutput.textContent = '';
        break;
      }
    };
      const model = new Model();
      this.signIn = document.getElementById('sign-in');
      const emailValue = document.querySelector('input[name="email"]').value;
      const passwordValue = document.querySelector('input[name="password"]').value;
      if (this.signIn.checked) {
        model.signIn({ 'email': emailValue, 'password': passwordValue }).catch((err) => {
          errorStatus(err.response.status);
        });
        this.errorOutput.textContent = '';
      } else {
        model.createUser({ 'email': emailValue, 'password': passwordValue }).catch((err) => {
          errorStatus(err.response.status);
        });
        this.errorOutput.textContent = '';
      }
  }
}

export default new LoginView();
