import markup from './Login.html';
import './styles.scss';

const USER = { email: 'hello1111@user.com', password: 'Gfhjkm_123' };
const successLoginMessage = 'Authenticated';

class LoginView { // extends View
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  display() {
    this.view.showInModal(markup);

    this.closeElement = this.view.getElement('.login__close');
    this.formWindow = this.view.getElement('.login__form');
    this.signIn = document.getElementById('sign-in');
    this.errorOutput = document.getElementById('error-output');
    this.signIn = this.view.getElement('.login__sign-in');
    this.signUp = this.view.getElement('.login__sign-up');
    this.email = this.view.getElement('input[name="email"]');
    this.password = this.view.getElement('input[name="password"]');
    this.resolve = null;
    this.closeElement.addEventListener('click', this.view.hideModal.bind(this.view));
    this.formWindow.addEventListener('click', (e) => {
      const { target } = e;
      e.preventDefault();

      this.sendData(target);
    });
    this.formWindow.addEventListener('input', this.validField);

    // return new Promise((resolve) => {
    //   this.resolve = resolve;
    // });
  }

  sendData(target) {
    const emailValue = this.email.value;
    const passwordValue = this.password.value;

    if (target === this.signIn) {
      this.model.signIn({ email: emailValue, password: passwordValue })
        .then((data) => {
          const { message } = data;

          if (message === successLoginMessage) {
            this.view.hideModal();
            this.model.signed(data);
          }
        })
        .catch((err) => {
          this.errorStatus(err.response.status);
        });
      this.errorOutput.textContent = '';
    } else if (target === this.signUp) {
      this.model.createUser({ email: emailValue, password: passwordValue })
        .then(({ email, id }) => {
          if (email && id) {
            this.sendData(this.signIn);
          }
        })
        .catch((err) => {
          this.errorStatus(err.response.status);
        });

      this.errorOutput.textContent = '';
    }
  }

  errorStatus(status) {
    switch (status) {
      case 417:
        this.errorOutput.textContent = 'This user already exists!';
        break;
      case 422:
        this.errorOutput.textContent = 'Wrong email or password!';
        break;
      case 404:
        this.errorOutput.textContent = 'This user not found!';
        break;
      case 403:
        this.errorOutput.textContent = 'Wrong password!';
        break;
      default:
        this.errorOutput.textContent = '';
        break;
    }

    return true;
  }

  validField(e) {
    const emailField = document.querySelector('.email');
    const passwrodField = document.querySelector('.password');
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regPassword = /(?=^.{8,30}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[\+\-\_\@\$\!\%\*\?\&\#\.\,\;\:\[\]\{\}]).*/;
    const buttons = [...document.querySelectorAll('.login-btn')];
    if (e.target === emailField) {
      if (regEmail.test(emailField.value)) {
        emailField.classList.remove('invalid');
      } else if (!regEmail.test(emailField.value) && !emailField.classList.contains('invalid')) {
        emailField.classList.add('invalid');
      }
    }

    if (e.target === passwrodField) {
      if (regPassword.test(passwrodField.value)) {
        passwrodField.classList.remove('invalid');
      } else if (!regPassword.test(passwrodField.value) && !passwrodField.classList.contains('invalid')) {
        passwrodField.classList.add('invalid');
      }
    }

    if (!emailField.classList.contains('invalid') && !passwrodField.classList.contains('invalid')) {
      buttons.forEach((btn) => {
        btn.removeAttribute('disabled');
      });
    } else {
      buttons.forEach((btn) => {
        btn.setAttribute('disabled', true);
      });
    }
  }
}

export default LoginView;
