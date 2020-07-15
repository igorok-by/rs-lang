const errorAudio = new Audio('./img/savanna/error.mp3')
const correctAudio = new Audio('./img/savanna/correct.mp3')

export default function start(model) {
    const background = document.querySelector('.savanna_game-wrapper');
    background.style.backgroundPositionY = '100%';
    heartConstructor();

    function heartConstructor() {
        const heartContainer = document.querySelector('.savanna__lives-container');
        const heart = '<div class="savanna__lives-item"></div>';
        for (let i = 0; i < 5; i++) {
            heartContainer.innerHTML += heart;
        }
    }

    document.querySelector('.savanna__new').onclick = () => {
        document.querySelector('.savanna__result').style.display = 'none'
        document.querySelector('.savanna_game-wrapper').style.display = 'flex'
        document.querySelector('.savanna__cor_num').innerHTML = 0
        document.querySelector('.savanna__er_num').innerHTML = 0
        document.querySelectorAll('.savanna__res_word').forEach((el)=>{el.remove()})
        start();
    }
    
    let page = Math.floor(Math.random() * (5 - 0) + 0);
    let group = Math.floor(Math.random() * (29 - 0) + 0);
    getWord(page, group);

    async function getWord(page, group) {  
        let fakeGroup = group >= 29 ? group-1 : group+1;
    
        const fakeWords = await model.getWords(page,fakeGroup);
        const trueWords = await model.getWords(page,group);
    
        const wordsInfo = {
            trueWord: trueWords.map(el => el.word),
            fakeWord: fakeWords.map(el => el.word),
            audio: trueWords.map(el => el.audio),
            img: trueWords.map(el => el.image)
        }
        check(wordsInfo);
    }

    function check(wordsInfo) {
        const { trueWord, fakeWord, audio, img } = wordsInfo;
        let arrSort = fakeWord.sort(() => Math.random() - 0.5);
    
        let arrWords = [trueWord[trueWord.length-1]];
    
        for(let i = 0; i < 4; i++){
            arrWords.push(arrSort[i])
        }
    
        const rightWord = {
            eng: trueWord[trueWord.length-1],
            audio: audio[trueWord.length-1],
            img: 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/' + img[trueWord.length-1].slice(6)
        };
    
        trueWord.splice(trueWord.length-1,1);
    
        const allTrueWord = {
            trueWord: trueWord,
            fakeWord: fakeWord,
            audio: audio,
            img: img
        }
    
        translateWord(arrWords, rightWord, allTrueWord);
        function translateWord(arrWords, rightWord, allTrueWord){
            console.log('translate');
            const { eng, audio } = rightWord;
            let urlAud = 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/'
            let aud = new Audio(urlAud + audio.slice(6))
            const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${arrWords} &lang=en-ru`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                let words = data.text[0].trim().split(',');
                let correctWord = words[0]
                words.sort(() => Math.random() - 0.5);
        
                const questionWord = document.querySelector('.savanna__question-word');
                
                const trainWords = document.querySelector('.savanna__train-words');
                
                function correctCheck(target,text){
                    if(text == corectWord){
                        correct(target,text)
                    } else {
                        error(corectWord)
                    }
                }
        
                function questionWordTransition(transition = fasle) {
                    const questionWordContainer = document.querySelector('.savanna__question-word-container');
                    if (!transition) {
                        questionWordContainer.style.transition = '';
                        questionWordContainer.style.transform = '';
                    } else {
                        questionWordContainer.style.transition = 'transition: all 5s linear';
                        questionWordContainer.style.transform = 'translateY(50%)';
                    }
                }
                round();
                function round() {
                    trainWords.innerHTML = '';
                    const heartContainer = document.querySelector('.savanna__lives-container');
                    allTrueWord.trueWord.length !==0 ? check(allTrueWord) : resultGame();
                    heartContainer.children.length > 0 ? check(allTrueWord) : resultGame();
                    questionWord.innerHTML = correctWord;
                    words.forEach((el) => {
                        let p = document.createElement('p');
                        p.innerHTML = el;
                        p.className = 'savanna__train-word'
                        trainWords.append(p);
                        p.addEventListener('click', (e) => correctCheck(e.target, e.target.innerHTML));
                        /* p.onclick = (e) => {
                            correctCheck(e.target, e.target.innerText);
                        } */
                    });
                    questionWordTransition(true);
                }
        
                function correct(target,text){
                    
                    document.querySelectorAll('.savanna__train-word').forEach(el => {
                        el.style.pointerEvents = 'none'
                    })
        
                    target.style.background = '#00c49d';
                    correctAudio.play();
                    bgTop();
                    const p = document.createElement('p');
                    const image = document.createElement('img');
                    image.src = './img/sprint/speaker.png'
                    image.onclick = () => {
                        aud.play();
                    }
                    p.className = 'savanna__res_word'
                    p.innerHTML = eng + ' - ' + text;
                    p.append(image);
                    document.querySelector('.savanna__correct').append(p)
                    const corChild =  document.querySelector('.savanna__correct').childNodes.length - 3
                    document.querySelector('.savanna__cor_num').innerHTML = corChild;
                }
        
                function error(text){
                    const heartItems = [...document.querySelectorAll('.savanna__lives-item')];
                    heartItems[0].remove();
                    document.querySelectorAll('.savanna__word').forEach(el => {
                        el.style.pointerEvents = 'none';
                        if(el.innerHTML !== text){
                            el.style.textDecoration = 'line-through';
                        }
                    })
        
                    errorAudio.play();
                    document.querySelector('.savanna__error').append(p);
                    const erChild =  document.querySelector('.savanna__error').childNodes.length - 3;
                    document.querySelector('.savanna__er_num').innerHTML = erChild;
                    round();
                }
        
                function bgTop() {
                    const background = document.querySelector('.savanna_game-wrapper');
                    const backgroundPosition = parseInt(getComputedStyle(background).backgroundPositionY, 10);
                    const bgPosValue = backgroundPosition - 3;
                    background.style.backgroundPositionY = bgPosValue + '%';
                }
        
                function resultGame(){
                    document.querySelector('.savanna__result').style.display = 'flex';
                    document.querySelector('.savanna_game-wrapper').style.display = 'none';
                }
        
            });
        }
    
    }


}







