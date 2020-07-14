const errorAudio = new Audio('./img/audio-call/error.mp3');
const correctAudio = new Audio('./img/audio-call/correct.mp3');

export default function start(model) {
  document.querySelector('.call__new').onclick = () => {
    document.querySelector('.call__result').style.display = 'none';
    document.querySelector('.call__game').style.display = 'flex';
    document.querySelector('.call__cor_num').innerHTML = 0;
    document.querySelector('.call__er_num').innerHTML = 0;
    document.querySelectorAll('.call__res_word').forEach((el) => { el.remove(); });

    start(true);
  };

  const page = Math.floor(Math.random() * (5 - 0) + 0);
  const group = Math.floor(Math.random() * (29 - 0) + 0);

  getWord(page, group);
  async function getWord(page, group) {
    const fakeGroup = group >= 29 ? group - 1 : group + 1;

    const fakeWords = await model.getWords(page, fakeGroup);
    const trueWords = await model.getWords(page, group);

    const wordsInfo = {
      trueWord: trueWords.map((el) => el.word),
      fakeWord: fakeWords.map((el) => el.word),
      audio: trueWords.map((el) => el.audio),
      img: trueWords.map((el) => el.image),
    };

    check(wordsInfo);
  }

  function check(wordsInfo) {
    const {
      trueWord, fakeWord, audio, img,
    } = wordsInfo;

    const arrSort = fakeWord.sort(() => Math.random() - 0.5);

    const arrWords = [trueWord[trueWord.length - 1]];

    for (let i = 0; i < 4; i++) {
      arrWords.push(arrSort[i]);
    }

    const rightWord = {
      eng: trueWord[trueWord.length - 1],
      audio: audio[trueWord.length - 1],
      img: `https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/${img[trueWord.length - 1].slice(6)}`,
    };

    trueWord.splice(trueWord.length - 1, 1);

    const allTrueWord = {
      trueWord,
      fakeWord,
      audio,
      img,
    };

    translateWord(arrWords, rightWord, allTrueWord);

    function translateWord(arrWords, rightWord, allTrueWord) {
      const { eng, audio, img } = rightWord;

      const urlAud = 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/';

      const aud = new Audio(urlAud + audio.slice(6));
      aud.play();

      document.querySelector('.call__img').onclick = () => {
        aud.play();
      };

      const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${arrWords} &lang=en-ru`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const words = data.text[0].trim().split(',');
          const corectWord = words[0];

          words.sort(() => Math.random() - 0.5);

          words.forEach((el) => {
            const p = document.createElement('p');
            p.innerHTML = el;
            p.className = 'call__word';
            document.querySelector('.call__words').append(p);
            p.onclick = (e) => {
              correctCheck(e.target, e.target.innerText);
            };
          });

          function correctCheck(target, text) {
            if (text == corectWord) {
              correct(target, text);
            } else {
              error(corectWord);
            }
          }

          document.querySelector('.call__button').onclick = () => {
            error(corectWord);
          };

          function correct(target, text) {
            document.querySelectorAll('.call__word').forEach((el) => {
              el.style.pointerEvents = 'none';
            });

            target.style.background = '#00c49d';
            correctAudio.play();
            document.querySelector('.call__result_img').src = img;
            document.querySelector('.call__result_p').innerHTML = eng;
            document.querySelector('.call__img').setAttribute('style', 'position:absolute; left:-80px; bottom: -20px; height: 20px;');
            document.querySelector('.call__button').innerHTML = '&#8594;';

            document.querySelector('.call__button').onclick = () => {
              document.querySelector('.call__words').innerHTML = '';
              abort();
              allTrueWord.trueWord.length !== 0 ? check(allTrueWord) : resultGame();
            };
            const p = document.createElement('p');
            const image = document.createElement('img');
            image.src = './img/sprint/speaker.png';
            image.onclick = () => {
              aud.play();
            };
            p.className = 'call__res_word';
            p.innerHTML = `${eng} - ${text}`;
            p.append(image);
            document.querySelector('.call__correct').append(p);
            const corChild = document.querySelector('.call__correct').childNodes.length - 3;
            document.querySelector('.call__cor_num').innerHTML = corChild;
          }

          function error(text) {
            document.querySelectorAll('.call__word').forEach((el) => {
              el.style.pointerEvents = 'none';
              if (el.innerHTML !== text) {
                el.style.textDecoration = 'line-through';
              }
            });

            errorAudio.play();
            document.querySelector('.call__result_img').src = img;
            document.querySelector('.call__result_p').innerHTML = eng;
            document.querySelector('.call__img').setAttribute('style', 'position:absolute; left:-80px; bottom: -20px; height: 20px;');
            document.querySelector('.call__button').innerHTML = '&#8594;';

            document.querySelector('.call__button').onclick = () => {
              document.querySelector('.call__words').innerHTML = '';
              abort();
              allTrueWord.trueWord.length !== 0 ? check(allTrueWord) : resultGame();
            };
            const p = document.createElement('p');
            const image = document.createElement('img');
            image.src = './img/sprint/speaker.png';
            image.onclick = () => {
              aud.play();
            };
            p.className = 'call__res_word';
            p.innerHTML = `${eng} - ${text}`;
            p.append(image);
            document.querySelector('.call__error').append(p);
            const erChild = document.querySelector('.call__error').childNodes.length - 3;
            document.querySelector('.call__er_num').innerHTML = erChild;
          }

          function abort() {
            document.querySelector('.call__result_img').src = '';
            document.querySelector('.call__result_p').innerHTML = '';
            document.querySelector('.call__img').style = '';
            document.querySelector('.call__button').innerHTML = 'Не знаю';
          }

          function resultGame() {
            document.querySelector('.call__result').style.display = 'flex';
            document.querySelector('.call__game').style.display = 'none';
          }
        });
    }
  }
}
