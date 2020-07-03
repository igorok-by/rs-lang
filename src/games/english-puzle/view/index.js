import markup from './EnglishPuzzle.html';
import StatusBar from './statusBar';
import GameField from './gameField';
import PiecesBar from './piecesBar';
import PromptBar from './promptBar';
import controlButtonsBar from './controlButtonsBar';
import './styles.scss';
import View from '../../../services/view';

const PICTURE_SOURCES = [
  'img/english-puzle/artGallery/Aivazovski_Mountains.jpeg',
  'img/english-puzle/artGallery/Aivazovski_Sunset.jpeg',
  'img/english-puzle/artGallery/Berkhem_Mountain.jpeg',
  'img/english-puzle/artGallery/BirshtadtTropicalSunset.jpeg',
  'img/english-puzle/artGallery/Birshtadt_CountryFerm.jpeg',
  'img/english-puzle/artGallery/Devjaty_val.jpg',
  'img/english-puzle/artGallery/HouseInTheRuse.jpg',
  'img/english-puzle/artGallery/MorningInTheWood.jpg',
  'img/english-puzle/artGallery/VanGog_Field.jpg',
  'img/english-puzle/artGallery/VillasAtTrouville.jpeg',
];

class GUI extends View {
  constructor() {
    super();
    this.statusBar = new StatusBar(this);
    this.promptBar = new PromptBar(this);
    this.gameField = new GameField(this);
    this.piecesBar = new PiecesBar(this);

    this.currentRow = NaN;
    this.inBasket = [];
  }

  getElementIndex(element) {
    const rowElements = this.gameField.puzzleElemetns[this.currentRow];

    return rowElements.findIndex((el) => el === element);
  }

  displayRowPieces(rowNumber) {
    const rowElements = this.gameField.getPiecesByRow(rowNumber).slice();

    GUI.shake(rowElements);

    rowElements.forEach(this.piecesBar.append.bind(this.piecesBar));

    this.currentRow = rowNumber;
  }

  async createPuzzle(level, sentences) {
    const imageSource = PICTURE_SOURCES[level];
    await this.gameField.createPuzzle(imageSource, sentences);
  }

  init() {
    this.testField = this.getElement('.english-puzzle__test-field');
  }

  displayWords(words) {
    this.testField.innerHTML = words.map((word, i) => `<p>${i}. ${word}</p>`).join('');
  }

  bindTestField(handle) {
    this.testField.addEventListener('click', () => {
      handle();
    });
  }

  getUI() {
    const statusBar = this.statusBar.render();
    const promptBar = this.promptBar.render();
    const gameField = this.gameField.render();
    const piecesBar = this.piecesBar.render();

    return this.render(markup, {
      title: 'ENGLISH PUZZLE',
      statusBar,
      promptBar,
      gameField,
      piecesBar,
      controlButtonsBar,
    });
  }

  addPieceToFieldRow(element) {
    const isCorrect = this.gameField
      .addPieceToRow(this.currentRow, element)
      .isCorrect(this.currentRow);

    console.log(isCorrect);
  }

  isCorrect(){
    // const
    const isCorrectSentence = this.inBasket
      .map((element) => this.getElementIndex(element))
      .every((el, i) => el === i);

    // return this.inBasket.length ===
    console.log(isCorrectSentence);
  }

  removePieceFromGameField(element) {
    this.piecesBar.append(element);
  }

  static shake(array) {
    array.sort(() => Math.random() - 0.5);

    return array;
  }
}

export default GUI;
