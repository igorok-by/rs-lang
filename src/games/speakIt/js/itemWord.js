export default class ItemWord{
    constructor(item,mainImage,buttonResult){
        this.parent =  document.querySelector('.speak__words')
        this.baseURL = 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/';
        this.word = item.word;
        this.transcription = item.transcription
        this.image = this.baseURL + item.image.slice(6)
        this.audio = new Audio(this.baseURL + item.audio.slice(6))
        this.cardHTML = null;
        this.wordHTML = null;
        this.transcriptionHTML = null;
        this.mainImage = mainImage;
        this.buttonResult = buttonResult
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
        if(src){
            element.src = src
        }  
        parent.appendChild(element);    
        return element;
    }
    translateWord(word) {
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word} &lang=en-ru`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.mainImage.updateState(this.image,data.text)
            });    
    }    
    translateInfo(word){
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word} &lang=en-ru`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.buttonResult.renderInfo(this.word,this.transcription,data.text)
            });
    }
    render() {
        const wrapperHTML = this.renderHtmlElement( this.parent, 'div', 'speak__item');
        const wordHTML = this.renderHtmlElement(wrapperHTML, 'p', 'speak__word', null, this.word);
        const transcriptionHTML = this.renderHtmlElement(wrapperHTML, 'p', 'speak__transcription', null, this.transcription);
        const img = this.renderHtmlElement(wrapperHTML, 'img', 'speak__audio-img', null, null, 'img/speakIt/speaker.png'); 
        this.cardHTML = wrapperHTML;
    }
    init(){
        this.render();
        this.setHandler();
        this.translateInfo(this.word)
    }
    setHandler(){
        this.cardHTML.onclick = () => {
            this.audio.play()
            this.translateWord(this.word)
            document.querySelectorAll('.item').forEach(el=>el.classList.remove('activeItem'))
            this.cardHTML.classList.add('activeItem')
        }
    }
}
