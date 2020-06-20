const AUDIO_FILES_PATH = './media/audio/';

export default {
  getElement(selector) {
    return document.querySelector(selector);
  },

  clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  },

  clearElementFrom(element, index) {
    for (let i = index; index < element.children.length; i += 1) {
      element.removeChild(element.children[index]);
    }
  },

  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  },

  createMenuItem(name, id) {
    const fragment = document.createDocumentFragment();
    const li = this.createElement('li');
    const span = this.createElement('span');

    li.setAttribute('data-id', id);
    li.classList.add('li-menu');
    span.textContent = name;
    li.appendChild(span);

    fragment.appendChild(li);
    return fragment;
  },

  playAudio(fileName) {
    const audio = new Audio(AUDIO_FILES_PATH + fileName);

    audio.play();

    return new Promise((resolve) => audio.addEventListener('ended', resolve, { once: true }));
  },
}