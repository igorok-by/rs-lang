import markup from './SpeakIt.html';
import View from '../../services/view';
// import getWord from './js/scripts';
import './styles.scss';

class SpeakIt extends View {
  constructor() {
    super();
    this.name = 'speakIt';
  }
  init(){
    const html = this.render(markup, { title: 'Speak It!' });
    console.log(this.getElement('.speak__main'))
    return html
  }
  /**
   * @param params Object
   * @returns html
   */
  display(params) {
    // this.init()
    return this.init()
  }
}

export default new SpeakIt();


// console.log(document.querySelector('.app-main'))

// document.querySelector('.speak__intro').addEventListener('click', ()=>{
//   document.querySelector('.speak__container').style.display = 'flex';
// document.querySelector('.speak__main').style.display = 'none'
// })
