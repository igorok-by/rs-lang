/* eslint-disable no-useless-escape */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */
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
    this.formWindow = this.getElement('.login__form');
    this.closeElement.addEventListener('click', this.hideModal.bind(this));
    this.formWindow.addEventListener('click', this.sendData);
    this.formWindow.addEventListener('input', this.validField);
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
      const signIn = document.querySelector('.login__sign-in');
      const signUp = document.querySelector('.login__sign-up');
      this.signIn = document.getElementById('sign-in');
      const emailValue = document.querySelector('input[name="email"]').value;
      const passwordValue = document.querySelector('input[name="password"]').value;
      if (e.target === signIn) {
        model.signIn({ 'email': emailValue, 'password': passwordValue }).catch((err) => {
          errorStatus(err.response.status);
        });
        this.errorOutput.textContent = '';
      } else if (e.target === signUp) {
        model.createUser({ 'email': emailValue, 'password': passwordValue }).catch((err) => {
          errorStatus(err.response.status);
        });
        this.errorOutput.textContent = '';
      }
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

export default new LoginView();
