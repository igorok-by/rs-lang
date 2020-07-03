import GameField from './GameField.html';
import PuzzlePiece from './puzzlePiece';
import './styles.scss';

class Puzzle extends PuzzlePiece {
  constructor(view) {
    super();
    this.view = view;
    this.puzzleElemetns = [];
    // this.wordsList = [
    //   'The students <b>agree</b> they have too much homework.',
    //   'There is a small <b>boat</b> on the lake.',
    //   'They <b>arrived</b> at school at 7 a.m.',
    //   'Is your birthday in <b>August</b>?',
    //   'I ate eggs for <b>breakfast</b>.',
    //   'I brought my <b>camera</b> on my vacation.',
    //   'The <b>capital</b> of the United States is Washington, D.C.',
    //   'Did you <b>catch</b> the ball during the baseball game?',
    //   'People feed <b>ducks</b> at the lake.',
    //   'The woman <b>enjoys</b> riding her bicycle.',
    // ];
  }

  init({ onElementClick }) {
    this.numbers = this.view.getElement('.game-field__numbers');
    this.puzzleField = this.view.getElement('.game-field__puzzle');
    // this.imageSource = this.pictures[8];
    this.bindElementClick(onElementClick);
    // this.puzzleElements = this.createPuzzle(this.imageSource);
  }

  getRow(number) {
    const rows = this.puzzleField.children;

    return rows[number];
  }

  setImageByLevel(level) {
    // this.image.src = this.pictures[level];
  }

  getPiecesByRow(number){
    console.log('getRowPieces', number)
    return this.puzzleElemetns[number];
  }

  getSentencePieces(sentence) {
    const fieldWidth = this.puzzleField.offsetWidth;
    const correctedSentence = sentence.replace(/<[^>]*>|\./g, '');
    const words = correctedSentence.split(/\s/);
    const allLettersCount = correctedSentence.replace(/\s/g, '').length;
    const k = fieldWidth / allLettersCount;
    const pieces = words.map((word, i, arr) => {
      const len = arr.length;
      const wordCount = word.length;

      const width = Math.floor(wordCount * k);

      let type = this.pieceTypes.INTERIM;
      if (i === 0) {
        type = this.pieceTypes.BEGINIG;
      } else if (i === (len - 1)) {
        type = this.pieceTypes.ENDING;
      }

      const canvasElement = this.createPiece(width, type);

      return { canvasElement, word };
    });

    return pieces;
  }

  addPieceToRow(rowN, piece) {
    const row = this.getRow(rowN);
    const addedPieces = row.children;
    const count = addedPieces.length;
    const { style } = piece;

    style.margin = 0;

    if (count) {
      style.marginLeft = `-${this.a}px`;
    }
    row.append(piece);

    return this;
  }

  isCorrect(rowN) {
    const row = this.getRow(rowN);
    const addedPieces = row.children;
    const orderElements = this.getPiecesByRow(rowN)

    return orderElements.every((el, i) => el === addedPieces[i]);
  }

  async getCanvasImageElement(source) {
    const canvas = this.view.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = this.puzzleField.offsetWidth;
    const height = this.puzzleField.offsetHeight;
    const image = new Image(width, height);

    canvas.width = width;
    canvas.height = height;

    image.src = source;

    return new Promise((resolve) => {
      image.addEventListener('load', () => {
        ctx.drawImage(image, 0, 0, image.width, image.height);
        resolve(canvas);
      });
    });
  }

  async createPuzzle(imageSource, words) {
    const canvasImage = await this.getCanvasImageElement(imageSource);

    this.puzzleElemetns = words.map((sentence, rowCount) => {
      const rowPieces = this.getSentencePieces(sentence);
      let x = 0;

      return rowPieces.map(({ canvasElement, word }, i) => {
        const y = canvasElement.height * rowCount;
        const imageOffset = this.a * i;

        this.drawImage({
          canvasElement,
          canvasImage,
          x,
          y,
          imageOffset,
        });

        this.fillText({ canvasElement, word });

        x += canvasElement.width;

        // this.addPieceToRow(rowCount, canvasElement);

        return canvasElement;
      });
    });

    return this.puzzleElemetns;
  }

  bindElementClick(handler){
    this.puzzleField.addEventListener('click', ({ target }) => {
      if (target instanceof HTMLCanvasElement)
        handler(target);
    });
  }

  render() {
    return this.view.render(GameField);
  }
}

export default Puzzle;
