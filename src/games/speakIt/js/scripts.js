import ItemWord from './itemWord';
import Difficult from './difficult';
import Model from '../../../services/model';

const model = new Model();

export default function start(page, group, isDot, buttonResult, buttonSpeak, mainImage, buttonRestart) {
  console.log(buttonResult);

  getWord(page, group, isDot);

  async function getWord(page, group, isDot) {
    console.log(page, group, isDot);
    // const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    // fetch(url)
    // .then(res => res.json())
    // .then(json => console.log(json))
    // // .then(json => words(json,isDot))
    const AllWords = await model.getWords(page, group);
    console.log(AllWords);
    words(AllWords, isDot);
  }

  const words = (json, isDot) => {
    const items = json.slice(0, 10);
    buttonSpeak.setInfo(items, mainImage);
    items.forEach((el, i) => {
      if (isDot) {
        const dif = new Difficult();
        if (i < 6 && isDot) { dif.init(i, mainImage, buttonResult, buttonSpeak, buttonRestart); }
        const card = new ItemWord(el, mainImage, buttonResult);
        card.init();
      } else {
        document.querySelectorAll('.speak__item')[0].remove();
        const card = new ItemWord(el, mainImage, buttonResult);
        card.init();
      }
    });
  };
}

// const mainImage = new ItemImage();
// mainImage.render();

// const buttonRestart = new ButtonRestart();
// buttonRestart.init();

// const buttonSpeak = new ButtonSpeak();
// buttonSpeak.init();

// const buttonResult = new ButtonResult();
// buttonResult.init();

// export  default async function getWord(page,group,isDot = true) {
//     // const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
//     // fetch(url)
//     // .then(res => res.json())
//     // .then(json => console.log(json))
//     // // .then(json => words(json,isDot))
//         const AllWords = await model.getWords(page,group);
//         words(AllWords,isDot)
// }

// const words = (json,isDot) => {
//     let items = json.slice(0,10)
//     console.log(items)
//     // buttonSpeak.setInfo(items,mainImage)
//     items.forEach((el,i) => {
//         if(isDot){
//             const dif = new Difficult()
//             if(i<6 && isDot){dif.init(i,mainImage)}
//             const card = new ItemWord(el,mainImage,buttonResult)
//             card.init()
//         } else {
//             document.querySelectorAll('.item')[0].remove()
//             const card = new ItemWord(el,mainImage,buttonResult)
//             card.init()
//         }
//     });
// }

// getWord(0,0)

// document.querySelector('.return').addEventListener('click', ()=>{
//     document.querySelector('.container').style.display = 'flex';
// document.querySelector('.result').style.display = 'none'
// })

// document.querySelector('.intro-btn').addEventListener('click', ()=>{
//     document.querySelector('.container').style.display = 'flex';
// document.querySelector('.main').style.display = 'none'
// })

// document.querySelector('.newGame').addEventListener('click', ()=>{
//     // document.querySelector('.main-img .translate').innerHTML = ''
//     document.querySelectorAll('.item').forEach(el=>{
//         el.classList.remove('activeItem');
//         el.classList.remove('stopHover')
//     })
//     document.querySelector('.input').value = ''
//     let suc = document.querySelector('.sucess').childNodes;
//     suc.forEach(el => document.querySelector('.wrong').append(el))
//     document.querySelector('.sucess').childNodes.forEach(el=> el.remove())

//     document.querySelector('.suc').innerHTML = 'Не знаю: '+ document.querySelector('.sucess').childNodes.length
//     document.querySelector('.error').innerHTML = 'Ошибок: '+ document.querySelector('.wrong').childNodes.length
// })
