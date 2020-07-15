import ControlButtonsBar from './ControlButtonsBar.html';
import './styles.scss';

class ControlButtons {
  constructor(view) {
    this.view = view;
  }

  init({
    onDontknowClick,
    onCheckClick,
    onContinueClick,
    onNextLevelClick,
  }) {
    this.dontKnowButton = this.view.getElement('.buttons-bar__button_i-dont-know');
    this.checkButton = this.view.getElement('.buttons-bar__button_check');

    this.bindDontknowClick(onDontknowClick);
    this.bindCheckClick({ onCheckClick, onContinueClick, onNextLevelClick });
  }

  changeToContinue() {
    const p = this.checkButton.children[0];

    p.textContent = 'Продолжить';

    this.checkButton.dataset.type = 'continue';
  }

  changeToNextLevel() {
    const p = this.checkButton.children[0];

    p.textContent = 'Следующий уровень';

    this.checkButton.dataset.type = 'nextlevel';
  }

  changeToCheck() {
    const p = this.checkButton.children[0];

    p.textContent = 'Проверка';

    this.checkButton.dataset.type = 'check';
  }

  hideDontKnowButton() {
    this.dontKnowButton.classList.add('buttons-bar__button_hideButton');
  }

  showDontKnowButton() {
    this.dontKnowButton.classList.remove('buttons-bar__button_hideButton');
  }

  bindDontknowClick(handler) {
    this.dontKnowButton.addEventListener('click', () => {
      handler();
    });
  }

  bindCheckClick({ onCheckClick, onContinueClick, onNextLevelClick }) {
    this.checkButton.addEventListener('click', ({ currentTarget }) => {
      const { type } = currentTarget.dataset;

      switch (type) {
        case 'continue':
          this.changeToCheck();
          this.showDontKnowButton();
          onContinueClick();
          break;
        case 'check':
          onCheckClick();
          break;
        case 'nextlevel':
          onNextLevelClick();
          break;
        default:
      }
    });
  }

  render() {
    return this.view.render(ControlButtonsBar);
  }
}

export default ControlButtons;
