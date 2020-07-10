export default class ButtonResult {
  constructor() {
    this.description = 'Result';
    this.buttonHTML = null;
    this.sound = null;
  }

  renderHtmlElement(parent, tag, className, id, innerHtml, src) {
    const element = document.createElement(tag);
    if (id) {
      element.id = id;
    }
    if (innerHtml) {
      element.innerText = innerHtml;
    }
    if (className) {
      element.className = className;
    }

    if (src) {
      element.src = src;
    }
    parent.appendChild(element);
    return element;
  }

  init() {
    this.render();
    this.setHandler();
  }

  render() {
    const wrapperHTML = document.querySelector('.speak__buttons');
    this.buttonHTML = this.renderHtmlElement(wrapperHTML, 'p', 'speak__button', null, this.description);
  }

  renderInfo(word, transcription, translate) {
    // document.querySelector('.wrong').innerHTML = ''
    const wrapperHTML = this.renderHtmlElement(document.querySelector('.speak__wrong'), 'div', 'speak__item-info');
    const wordHTML = this.renderHtmlElement(wrapperHTML, 'p', 'speak__word', null, word);
    const transcriptionHTML = this.renderHtmlElement(wrapperHTML, 'p', 'speak__transcription', null, transcription);
    const translateHTML = this.renderHtmlElement(wrapperHTML, 'p', 'speak__translate', null, translate);
  }

  setHandler() {
    this.buttonHTML.addEventListener('click', () => {
      document.querySelector('.speak__container').style.display = 'none';
      document.querySelector('.speak__result').style.display = 'flex';
      // document.querySelectorAll('.item-info').forEach(el => {
      //     el.addEventListener('click', (el) => {
      //         this.sound = el.target.closest('div').querySelector('.word').innerHtml
      //         console.log(this.sound)
      //     })
      // })
    });
  }
}
