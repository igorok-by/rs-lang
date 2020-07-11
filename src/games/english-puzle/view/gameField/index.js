import GameField from './GameField.html';
import NumberItem from './NumberItem.html';
import PuzzleRow from './PuzzleRow.html';
import PuzzlePiece from './puzzlePiece';
import './styles.scss';

class Puzzle extends PuzzlePiece {
  constructor(view) {
    super();
    this.view = view;
    this.puzzleElemetns = [];
    this.image = null;
    this.movedElement = null;
    this.markClasses = ['wrong', 'correct'];
  }

  init({ onElementClick, onCorrect }) {
    this.gameField = this.view.getElement('.english-puzzle__game-field');
    this.numbersField = this.view.getElement('.game-field__numbers');
    this.puzzleField = this.view.getElement('.game-field__puzzle');
    this.onElementClick = onElementClick;
    this.onCorrect = onCorrect;

    this.bindElementClick(onElementClick);
    // this.puzzleElements = this.createPuzzle(this.imageSource);
    this.bindDropEvent();
  }

  getRow(number) {
    const rows = this.puzzleField.children;

    return rows[number];
  }

  getRowIndex(row) {
    const rows = Array.from(this.puzzleField.children);

    return rows.findIndex((el) => el === row);
  }

  getPiecesByRow(number) {
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

      const canvasElement = this.createPiece({ width, type });

      return { canvasElement, word };
    });

    return pieces;
  }

  clearAllMarksInRow(rowN) {
    const row = this.getRow(rowN);
    const elements = Array.from(row.children);

    elements.forEach((el) => el.classList.remove(...this.markClasses));
  }

  addPieceToRow(rowN, piece, elementBefore) {
    const rowIndex = rowN instanceof HTMLElement ? this.getRowIndex(rowN) : rowN;
    const row = this.getRow(rowIndex);
    const addedPieces = Array.from(row.children);
    const isNotEmpty = addedPieces.length;
    const { style } = piece;

    style.margin = 0;

    if (isNotEmpty) {
      style.marginLeft = `-${this.a}px`;
    }

    if (elementBefore instanceof HTMLElement) {
      row.insertBefore(piece, elementBefore);
    } else {
      row.append(piece);
    }

    this.clearAllMarksInRow(rowIndex);
    this.checkRow(rowIndex);

    return this;
  }

  checkRow(rowN) {
    const row = this.getRow(rowN);
    const addedPieces = row.children;
    const orderElements = this.getPiecesByRow(rowN);

    const isCorrect = orderElements.every((el, i) => el === addedPieces[i]);

    if (isCorrect) {
      this.onCorrect();
      this.showWrong(rowN);
      this.blockRow(rowN);
    }

    return isCorrect;
  }

  blockRow(rowN) {
    const row = this.getRow(rowN);

    row.classList.add('block');
  }

  async showPicture(source) {
    const image = await this.getCanvasImageElement(source);

    image.classList.add('game-field__image');

    this.puzzleField.append(image);
  }

  hidePicture() {
    const picture = this.view.getElement('.game-field__image');

    if (picture) picture.remove();
  }

  showBackgroundPicture(source) {
    const width = this.puzzleField.offsetWidth;
    const height = this.puzzleField.offsetHeight;
    const image = new Image();
    const { style } = image;

    style.width = `${width + 36}px`;
    style.height = `${height}px`;

    image.src = source;

    image.classList.add('puzzle__background');

    this.puzzleField.append(image);
  }

  hideBackgroundPicture() {
    const image = this.view.getElement('.puzzle__background');

    if (image) image.remove();
  }

  showWrong(rowN) {
    const row = this.getRow(rowN);
    const addedPieces = Array.from(row.children);
    const orderElements = this.getPiecesByRow(rowN);

    if (addedPieces.length) {
      addedPieces.forEach((canvasElement, i) => {
        const isCorrectPosition = canvasElement === orderElements[i];
        const markClass = this.markClasses[Number(isCorrectPosition)];

        canvasElement.classList.add(markClass);
      });

      setTimeout(this.clearAllMarksInRow.bind(this, rowN), 5000);
    }
  }

  setInCorrectOrder(rowN) {
    const row = this.getRow(rowN);
    const ordered = this.getPiecesByRow(rowN);

    this.view.clearElement(row);

    ordered.forEach((el) => this.addPieceToRow(rowN, el));

    this.checkRow(rowN);
  }

  async getCanvasImageElement(source, {
    width = this.puzzleField.offsetWidth,
    height = this.puzzleField.offsetHeight,
  } = {}) {
    const canvas = this.view.createElement('canvas');
    const ctx = canvas.getContext('2d');
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

  addRow(number) {
    const rowHtml = this.view.render(PuzzleRow);
    const numberHtml = this.view.render(NumberItem, { number });

    this.puzzleField.insertAdjacentHTML('beforeend', rowHtml);
    this.numbersField.insertAdjacentHTML('beforeend', numberHtml);
  }

  async clearPuzzleField() {
    await this.view.clearElement(this.puzzleField);
    await this.view.clearElement(this.numbersField);
  }

  async createPuzzle(imageSource, words) {
    const canvasImage = await this.getCanvasImageElement(imageSource);

    this.image = canvasImage;

    await this.clearPuzzleField();

    this.puzzleElemetns = words.map((sentence, rowCount) => {
      const rowPieces = this.getSentencePieces(sentence);
      let x = 0;

      this.addRow(rowCount + 1);

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

        // eslint-disable-next-line no-param-reassign
        canvasElement.draggable = true;

        canvasElement.addEventListener('dragstart', (e) => {
          e.dataTransfer.effectAllowed = 'move';
          this.movedElement = e.target;
        });

        x += canvasElement.width;

        return canvasElement;
      });
    });

    return this.puzzleElemetns;
  }

  bindElementClick(handler) {
    this.puzzleField.addEventListener('click', ({ target }) => {
      if (target instanceof HTMLCanvasElement) {
        target.classList.remove(...this.markClasses);
        handler(target);
      }
    });
  }

  bindDropEvent() {
    this.puzzleField.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    this.puzzleField.addEventListener('drop', (e) => {
      const { target } = e;
      const isCanvasElement = target instanceof HTMLCanvasElement;

      if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
      }

      if (isCanvasElement) {
        const row = target.parentElement;

        this.addPieceToRow(row, this.movedElement, target);
      } else {
        this.addPieceToRow(target, this.movedElement);
      }
    });
  }

  render() {
    return this.view.render(GameField);
  }
}

export default Puzzle;
