export default class Core {
  constructor(model) {
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

  addHandlers() {
    document.getElementById('tomfoolery__start__btn').addEventListener('click', () => this.startGameHandler());


  }

  async getWords() {
    const page = Math.floor(Math.random() * (5 - 0) + 0);
    const group = Math.floor(Math.random() * (29 - 0) + 0);
    const words = await this.model.getWords(page, group);
    return words;


  }

  async init() {
    this.addHandlers();
    this.arr = await this.getWords();
    this.startGame();


  }


  startGameHandler() {
    document.getElementById('resetBtn').addEventListener('click', () => this.gameReset());
    document.querySelector('.tomfoolery__main').classList.add('tomfoolery__display_none');
    document.querySelector('.tomfoolery__container').classList.remove('tomfoolery__display_none');
    document.querySelector('.tomfoolery__reset').classList.add('tomfoolery__display_none');
    this.timer();

  }

  gameReset() {
    this.startGame();
    this.timer();
    document.querySelector('.tomfoolery__сlear').classList.remove('tomfoolery__display_none');
    document.querySelector('.tomfoolery__reset').classList.add('tomfoolery__display_none');
    document.querySelector('.tomfoolery__timer').classList.remove('tomfoolery__display_none');
    const score = document.getElementById('score');
    score.innerText = 0;

  }




  getShuffleWord(word) {
    let shuffleWord = word.split('').sort(() => Math.random() - 0.5).join('');
    if (shuffleWord === word) {
      return this.getShuffleWord(word);
    } else {
      return shuffleWord;
    }
  };

  showTranslate({ wordTranslate }) {
    const HTML = document.getElementById('showTranslate');
    HTML.innerText = wordTranslate
  }

  clearAll() {
    document.getElementById('showTranslate').innerHTML = '';
    document.getElementById('inputWord').innerHTML = '';
    document.getElementById('shuffleWord').innerHTML = '';
  }

  clearInput() {
    document.getElementById('inputWord').innerHTML = '';
  }

  nextWord() {
    this.clearAll();
    this.CURENT_INDEX = this.CURENT_INDEX < this.arr.length - 1 ? this.CURENT_INDEX + 1 : 0;

    this.basicFlow(this.arr[this.CURENT_INDEX]);
  }

  winsCounter() {
    const score = document.getElementById('score');
    score.innerText = Number(score.innerText) + 1;


  }

  stop() {
    clearInterval(this.interval);

  }

  timer() {


    const time = document.getElementById('time');
    let seconds = 60;



    clearInterval(this.interval);

    this.interval = setInterval(() => {

      seconds -= 1;
      document.querySelector('.tomfoolery__timer').classList.remove('tomfoolery__display_none');

      time.innerText = seconds;
      if (seconds === 0) {
        document.getElementById('showTranslate').innerHTML = '';
        document.getElementById('inputWord').innerHTML = '';
        document.getElementById('shuffleWord').innerHTML = '';
        document.querySelector('.tomfoolery__сlear').classList.add('tomfoolery__display_none');
        document.querySelector('.tomfoolery__reset').classList.remove('tomfoolery__display_none');
        document.querySelector('.tomfoolery__timer').classList.add('tomfoolery__display_none');
        clearInterval(this.interval);
      }
    }, 1000);




  }



  showShuffleWord({ word }) {
    const parent = document.getElementById('shuffleWord');
    const shuffleWord = this.getShuffleWord(word);
    const HTMLinputWord = document.getElementById('inputWord');

    shuffleWord.split('').forEach(letter => {
      const element = this.renderHtmlElement(parent, 'div', 'letter__className', null, letter);

      element.addEventListener('click', ({ target }) => {
        if (HTMLinputWord.innerText.length <= word.length) {
          HTMLinputWord.innerText = HTMLinputWord.innerText + target.innerText;
          if (HTMLinputWord.innerText === word) {

            this.nextWord();
            this.winsCounter();

          };
        }
        else { alert("Вы ввели слишком много букв - нажмите кнопку ОЧИСТИТЬ и попробуйте еще раз"); }

      })
    });

  }

  basicFlow(item) {

    this.showTranslate(item);
    this.showShuffleWord(item);
  }


  startGame() {
    document.getElementById('clearBtn').addEventListener('click', () => {
      this.clearInput();
    });

    this.basicFlow(this.arr[this.CURENT_INDEX]);

  }

}
