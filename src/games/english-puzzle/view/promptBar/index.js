import PromptBar from './PromptBar.html';
import './styles.scss';
import speakerIcon from '../../assets/img/speaker.svg';

class HintsController {
  constructor(view) {
    this.view = view;
    this.hideClass = 'prompt-bar__hide';
  }

  init({ onSpeakerClick }) {
    this.bar = this.view.getElement('.english-puzzle__prompt-bar');
    this.translation = this.view.getElement('.prompt-bar__text-content');
    this.speaker = this.view.getElement('.prompt-bar__speaker-icon');

    this.bindSpeakerIcon(onSpeakerClick);
  }

  bindSpeakerIcon(handler) {
    this.speaker.addEventListener('click', async () => {
      this.displayAudioProcess(true);

      await handler();

      this.displayAudioProcess();
    });
  }

  displayMessage(message) {
    this.translation.textContent = message;
  }

  hideAll() {
    this.displaySpeaker(false);
    this.displayTranslation(false);
  }

  showAll() {
    this.displaySpeaker();
    this.displayTranslation();
  }

  displayAudioProcess(isShow) {
    const activeClass = 'prompt-bar__speaker-icon_active';
    if (isShow) {
      this.speaker.classList.add(activeClass);
    } else {
      this.speaker.classList.remove(activeClass);
    }
  }

  displaySpeaker(isShow) {
    const method = isShow === false ? 'add' : 'remove';

    this.speaker.classList[method](this.hideClass);
  }

  displayTranslation(isShow) {
    const method = isShow === false ? 'add' : 'remove';

    this.translation.classList[method](this.hideClass);
  }

  render() {
    return this.view.render(PromptBar, {
      speakerIcon,
      text: '',
    });
  }
}

export default HintsController;
