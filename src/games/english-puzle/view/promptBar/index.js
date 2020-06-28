import PromptBar from './PromptBar.html';
import './styles.scss';
import speakerIcon from '../../assets/img/speaker.png';

class HintsController {
  constructor(view) {
    this.view = view;
  }

  init({ onSpeakerClick }) {
    this.text = this.view.getElement('.prompt-bar__text-content');
    this.speaker = this.view.getElement('.prompt-bar__speaker-icon');

    console.log('text', this.text);

    this.bindSpeakerIcon(onSpeakerClick);
  }

  bindSpeakerIcon(handler) {
    this.speaker.addEventListener('click', () => {
      handler();
    });
  }

  displayMessage(message) {
    // console.log(this.text)
    console.log(this.view.getElement('.prompt-bar__text-content'));
    this.text.textContent = message;
  }

  render() {
    return this.view.render(PromptBar, {
      speakerIcon,
      text: '',
    });
  }
}

export default HintsController;
