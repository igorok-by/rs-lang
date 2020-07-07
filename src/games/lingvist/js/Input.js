import create from './utils/create';

export default class Input {
  constructor(word) {
    this.letters = word.split('');

    this.inputAnswer = create('input', 'input__answer', null, null, ['type', 'text'], ['autocomplete', 'off'], ['autocorrect', 'off'], ['spellcheck', 'false']);
    this.wordHolder = create('span', 'input__word');
    this.background = create('span', 'input__background');
  }

  insertWord() {
    this.wordHolder.innerHTML = '';
    this.letters = this.letters.map((letter, index) => create(
      'span', 'hidden', letter, null, ['index', index],
    ));

    this.wordHolder.append(...this.letters);
  }

  createTemplate() {
    this.insertWord();

    return [this.wordHolder, this.background, this.inputAnswer];
  }
}
