import ItemWord from './itemWord'
import Difficult from './difficult'
import Model from '../../../services/model';

const model = new Model();


export default function start(page,group,isDot,buttonResult,buttonSpeak,mainImage,buttonRestart){
    console.log(buttonResult)
    
    getWord(page,group,isDot)

    async function getWord(page,group,isDot) {  
        console.log(page,group,isDot)
            const AllWords = await model.getWords(page,group);
            console.log(AllWords)
            words(AllWords,isDot)
    }
    

    const words = (json,isDot) => {
        let items = json.slice(0,10)
        buttonSpeak.setInfo(items,mainImage)
        items.forEach((el,i) => {
            if(isDot){
                const dif = new Difficult()
                if(i<6 && isDot){dif.init(i,mainImage,buttonResult,buttonSpeak,buttonRestart)}
                const card = new ItemWord(el,mainImage,buttonResult)
                card.init()
            } else {
                document.querySelectorAll('.speak__item')[0].remove()
                const card = new ItemWord(el,mainImage,buttonResult)
                card.init()
            }
        });
    }
}
