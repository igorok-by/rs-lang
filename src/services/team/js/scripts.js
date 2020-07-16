export default class Core {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.CURENT_INDEX = 0;
    this.arr = null;
    this.score = null;
    this.interval = null;
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
      element.src = src
    }
    parent.appendChild(element);
    return element;
  }



  async init() {
    this.closeElement = this.view.getElement('.team_header__link');
    this.closeElement.addEventListener('click', () => {
      this.view.hideModal();
    })
    console.log('element', this.closeElement);

  }
}