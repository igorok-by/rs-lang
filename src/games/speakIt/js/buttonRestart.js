export default class ButtonRestart{
    constructor(){
        this.description = 'Restart';
        this.buttonHTML = null
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
    init(){
        this.render()
        this.setHandler()
    }
    render() {
        const wrapperHTML = document.querySelector('.speak__buttons') 
        this.buttonHTML = this.renderHtmlElement(wrapperHTML, 'p', 'speak__button',null,this.description);
    }
    setHandler(){
        this.buttonHTML.addEventListener('click',()=>{
            document.querySelectorAll('.speak__item').forEach(el=>{
                el.classList.remove('speak__activeItem');
                el.classList.remove('speak__stopHover')
            })
            document.querySelector('.speak__main-img .speak__translate').innerHTML = ''
            if(document.querySelector('.speak__input')){
                document.querySelector('.speak__input').remove()
            }
            let suc = document.querySelector('.speak__sucess').childNodes;
            suc.forEach(el => document.querySelector('.speak__wrong').append(el)) 
            document.querySelector('.speak__sucess').childNodes.forEach(el=> el.remove())
            
            document.querySelector('.speak__suc').innerHTML = 'Не знаю: '+ document.querySelector('.speak__sucess').childNodes.length
            document.querySelector('.speak__error').innerHTML = 'Ошибок: '+ document.querySelector('.speak__wrong').childNodes.length
        })
    }
}
