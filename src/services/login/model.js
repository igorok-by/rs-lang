import MainModel from '../model';

class Model extends MainModel {
  isLogin() {
    if (this.userId) {
      return true;
    }
    return false;
  }
}

export default new Model();

/* let data = await this.login(USER);
if (!data) {
  data = await model.createUser(USER);
}
console.log(data);
if (data.message === 'Authenticated') {
  const userWords = await model.getUserWords();

  console.log('userWords', userWords);

  if (userWords.length === 0) {
    const words = await model.getWords({ group: 2, page: 4 });
    console.log('words', words);
     console.log('result', result)
    words.forEach(async ({ id }) => {
      const word = { difficulty: 'weak', optional: { testFieldString: 'test',
testFieldBoolean: true } };
      await model.createUserWord({ wordId: id, word });
    });
    view.showIn('main', `
      <div style="{width: 100%; height: 100%; text-align: center}">
        ${words.map(({ word, wordTranslate }) => `<p>${word} > ${wordTranslate}</p>`).join('')}
      </div>
    `);
  }
}
 */