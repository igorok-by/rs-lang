import markup from './Login.html';
import View from '../view';
import './styles.scss';

class LoginView extends View {
  show() {
    this.showInModal(markup);

    this.closeElement = this.getElement('.login__close');
    console.log(this.closeElement);
    this.closeElement.addEventListener('click', this.hideModal.bind(this));
  }
}

export default new LoginView();


