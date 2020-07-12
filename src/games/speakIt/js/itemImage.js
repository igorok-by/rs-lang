export default class ItemImage{
    constructor(){
        this.img = 'img/speakIt/blank.jpg';
        this.description = '';
        this.pHTML = null;
        this.imgHTML = null;
    }
    renderHtmlElement(parent, tag, className, id, innerHtml, src) {
        const element = document.createElement(tag);    
        if (id) {
          element.id = id;
        }
        if (innerHtml) {
          element.innerText = innerHtml;
        }
        if(className) {
           element.className = className; 
        }
        
        if(src) {
            element.src = src
        }
        parent.appendChild(element);    
        return element;
    }

    render() {
        const wrapperHTML = document.querySelector('.speak__main-img') 
        this.imgHTML = this.renderHtmlElement(wrapperHTML, 'img', 'speak__img', null, null, this.img );
        this.pHTML  = this.renderHtmlElement(wrapperHTML, 'p', 'speak__translate', null, this.description);
    }

    updateState(image, word) {
        this.image = image;
        this.description = word;
        this.imgHTML.src = image;
        this.pHTML.innerText = word;
    }
}