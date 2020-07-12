import markup from './StartWindow.html';
import './styles.scss';

class StartWindow {
  constructor(view) {
    this.view = view;
  }

  init({ onStartClick }) {
    this.startWindow = this.view.getElement('.english-puzzle__start-window');
    this.startButton = this.view.getElement('.start-window__start-button');
    this.container = this.startWindow.closest('.container');

    this.bindStartClick(onStartClick);
  }

  bindStartClick(handler) {
    this.startButton.addEventListener('click', () => {
      this.hideWindow();
      handler();
    });
  }

  hideWindow() {
    this.container.classList.remove('fullScreen');
    this.startWindow.classList.add('english-puzzle__start-window_hide');
  }

  showWindow() {
    this.container.classList.add('fullScreen');
    this.startWindow.classList.remove('english-puzzle__start-window_hide');
  }

  render() {
    return this.view.render(markup);
  }
}

export default StartWindow;
