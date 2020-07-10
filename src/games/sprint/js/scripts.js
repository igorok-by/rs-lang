import Model from '../../../services/model';

const model = new Model();

const errorAudio = new Audio('./img/sprint/error.mp3');
const correctAudio = new Audio('./img/sprint/correct.mp3');

export default async function start(isTimer = true) {
  document.querySelector('.sprint__new').onclick = () => {
    document.querySelector('.sprint__result').style.display = 'none';
    document.querySelector('.sprint__game').style.display = 'flex';
    document.querySelector('.sprint__score').innerHTML = 0;
    document.querySelector('.sprint__cor_num').innerHTML = 0;
    document.querySelector('.sprint__point').innerHTML = 0;
    document.querySelector('.sprint__er_num').innerHTML = 0;
    document.querySelector('.sprint__en').innerHTML = '';
    document.querySelector('.sprint__ru').innerHTML = '';
    document.querySelectorAll('.sprint__res_word').forEach((el) => { el.remove(); });

    start(true);
  };

  const timerBlock = document.querySelector('.sprint__timer');

  timerBlock.style.display = 'flex';

  let sec = 61;
  let timeout;
  isTimer ? timer() : console.log('timer');

  function timer() {
    timeout = setInterval(() => {
      timerBlock.innerHTML = sec -= 1;
      if (sec == 0) {
        document.querySelector('.sprint__game').style.display = 'none';
        document.querySelector('.sprint__result').style.display = 'flex';

        clearTimeout(timeout);
      }
    }, 1000);
  }

  // const page = Math.floor(Math.random() * (5 - 0) + 0);
  // const group = Math.floor(Math.random() * (29 - 0) + 0);
  //
  // getWord(page, group);

  async function getWord(page, group) {
    const fakeGroup = group >= 29 ? group - 1 : group + 1;

    const fakeWords = await model.getWords(page, fakeGroup);
    const trueWords = await model.getWords(page, group);


    const trueWord = trueWords.map((el) => el.word);
    const fakeWord = fakeWords.map((el) => el.word);
    const audio = trueWords.map((el) => el.audio);

    return {
      trueWord, fakeWord, audio
    }
    // check(trueWord, fakeWord, audio);
  }

  function check({ trueWord, fakeWord, audio }) {
    const trues = trueWord;
    const fakes = fakeWord;

    const randWord = Math.floor(Math.random() * (trues.length - 0) + 0);

    const word = Math.floor(Math.random() * (10 - 0) + 0) <= 5 ? [1, trues[randWord]] : [0, fakes[randWord]];

    translateWord(trues[randWord], word, trues, fakes, audio[randWord], audio);

    async function translateWord(trues, word, trueWord, fakeWord, audioWord, audio) {
      document.querySelector('.sprint__img').onclick = () => {
        const url = 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/';
        const aud = new Audio(url + audioWord.slice(6));
        aud.play();
      };

      trueWord.splice(randWord, 1);
      fakeWord.splice(randWord, 1);
      audio.splice(randWord, 1);
      const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word[1]} &lang=en-ru`;

      const res = await fetch(url);
      const data = await res.json();

      document.querySelector('.sprint__en').innerHTML = trues;
      document.querySelector('.sprint__ru').innerHTML = data.text;

      document.querySelector('.sprint__right').onclick = () => {
        trueWord.length === 0 ? start(false) : check(trueWord, fakeWord, audio);

        word[0] == 1 ? correct(trues) : error(trues);
      };

      document.querySelector('.sprint__noright').onclick = () => {
        trueWord.length === 0 ? start(false) : check(trueWord, fakeWord, audio);

        word[0] === 0 ? correct(trues) : error(trues);
      };

      function correct(word) {
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word} &lang=en-ru`;

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            correctAudio.play();
            document.querySelector('.sprint__game').classList.add('sprint__green');
            setTimeout(() => { document.querySelector('.sprint__game').classList.remove('sprint__green'); }, 200);

            let cor = +document.querySelector('.sprint__cor_num').innerText;
            cor += 1;
            document.querySelector('.sprint__cor_num').innerHTML = cor;
            document.querySelector('.sprint__score').innerHTML = cor * 10;
            document.querySelector('.sprint__point').innerHTML = `Ваш результат: ${cor * 10}`;

            const p = document.createElement('p');
            const img = document.createElement('img');
            img.src = './img/sprint/speaker.png';
            img.onclick = () => {
              const url = 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/';
              const aud = new Audio(url + audioWord.slice(6));
              aud.play();
            };
            p.className = 'sprint__res_word';
            p.innerHTML = `${word} - ${data.text}`;
            p.append(img);
            document.querySelector('.sprint__correct').append(p);
          });
      }

      function error(word) {
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word} &lang=en-ru`;

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            document.querySelector('.sprint__game').classList.add('sprint__red');
            errorAudio.play();
            setTimeout(() => { document.querySelector('.sprint__game').classList.remove('sprint__red'); }, 200);

            let er = +document.querySelector('.sprint__er_num').innerText;
            er += 1;
            document.querySelector('.sprint__er_num').innerHTML = er;

            const p = document.createElement('p');
            const img = document.createElement('img');
            img.src = './img/sprint/speaker.png';
            img.onclick = () => {
              const url = 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/';
              const aud = new Audio(url + audioWord.slice(6));
              aud.play();
            };
            p.className = 'sprint__res_word';
            p.innerHTML = `${word} - ${data.text}`;
            p.append(img);
            document.querySelector('.sprint__error').append(p);
          });
      }
    }
  }

  const page = Math.floor(Math.random() * (5 - 0) + 0);
  const group = Math.floor(Math.random() * (29 - 0) + 0);

  const words = await getWord(page, group)

  check(words);
}
