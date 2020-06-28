const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();
const Utterance = new SpeechSynthesisUtterance();

recognition.lang = 'ru';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

export const RecStart = (event = {}) => {
  recognition.abort();

  recognition.onaudiostart = () => {
    event.emit('active', true);
  };

  recognition.onspeechend = function () {
    recognition.stop();
    event.emit('active', false);
  };

  recognition.onresult = function (e) {
    const last = e.results.length - 1;
    const { transcript } = e.results[last][0];

    event.emit('result', transcript);
  };

  recognition.start();
};

export const RecStop = (event) => {
  event.emit('active', false);
  recognition.stop();
};

export const Speak = (text, language) => {
  const voices = synth.getVoices();
  const langVoice = voices.find(({ lang }) => lang === language);
  Utterance.text = text;

  Utterance.voice = langVoice;

  synth.speak(Utterance);
};

export const SetVolume = (command) => {

};
