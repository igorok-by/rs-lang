import ItemWord from './itemWord';
import Difficult from './difficult';

async function start({
  model, page, group, isDot, buttonResult, buttonSpeak, mainImage, buttonRestart,
}) {
  const AllWords = await model.getWords(page, group);
  const items = AllWords.slice(0, 10);

  buttonSpeak.setInfo(items, mainImage);
  items.forEach((el, i) => {
    if (isDot) {
      const dif = new Difficult(model);
      if (i < 6 && isDot) {
        dif.init(i, mainImage, buttonResult, buttonSpeak, buttonRestart);
      }
      const card = new ItemWord(el, mainImage, buttonResult);
      card.init();
    } else {
      document.querySelectorAll('.speak__item')[0].remove();
      const card = new ItemWord(el, mainImage, buttonResult);
      card.init();
    }
  });
}

export default start;
