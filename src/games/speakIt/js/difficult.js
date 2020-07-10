import start from './scripts';

export default class Difficult {
  construcor() {
    this.dot = null;
    this.mainImage = null;
    this.point = 0;
    this.buttonResult = null;
    this.buttonSpeak = null;
    this.buttonRestart = null;
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

  init(i, mainImage, buttonResult, buttonSpeak, buttonRestart) {
    this.render(i);
    this.setHandler(i);
    this.mainImage = mainImage;
    this.buttonResult = buttonResult;
    this.buttonSpeak = buttonSpeak;
    this.buttonRestart = buttonRestart;
  }

  setHandler(i) {
    this.dot.addEventListener('click', (el) => {
      const dots = document.querySelectorAll('.speak__dif');
      dots.forEach((el) => {
        el.classList.remove('speak__active');
      });
      this.dot.classList.add('speak__active');
      const isDot = false;
      const point = Math.floor(Math.random() * (29 - 0) + 0);
      start(i, point, isDot, this.buttonResult, this.buttonSpeak, this.mainImage, this.buttonRestart);
      this.mainImage.updateState('img/speakIt/blank.jpg', '');
      document.querySelectorAll('.speak__item').forEach((el) => el.classList.remove('speak__stopHover'));
      if (document.querySelector('.speak__main-img input')) { document.querySelector('.speak__main-img input').remove(); }
      document.querySelector('.speak__wrong').innerHTML = '';
    });
  }

  render(i) {
    const wrapperHTML = document.querySelector('.speak_ul');
    this.dot = i == 0 ? this.renderHtmlElement(wrapperHTML, 'li', 'speak__dif speak__active') : this.renderHtmlElement(wrapperHTML, 'li', 'speak__dif');
    // console.log(i)
  }
}
