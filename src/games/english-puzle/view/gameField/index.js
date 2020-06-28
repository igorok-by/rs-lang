import GameField from './GameField.html';
import PuzzlePiece from './puzzlePiece';
import './styles.scss';

const CONNECTING_PART_WIDTH = 11;
const AROUND_WORD_WIDTH = 10;
const LETTER_WIDTH = 10;

class Puzzle extends PuzzlePiece {
  constructor(view) {
    super();
    this.view = view;
    this.pictures = [
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
    this.wordsList = [
      'The students <b>agree</b> they have too much homework.',
      'There is a small <b>boat</b> on the lake.',
      'They <b>arrived</b> at school at 7 a.m.',
      'Is your birthday in <b>August</b>?',
      'I ate eggs for <b>breakfast</b>.',
      'I brought my <b>camera</b> on my vacation.',
      'The <b>capital</b> of the United States is Washington, D.C.',
      'Did you <b>catch</b> the ball during the baseball game?',
      'People feed <b>ducks</b> at the lake.',
      'The woman <b>enjoys</b> riding her bicycle.',
    ];
  }

  init() {
    this.numbers = this.view.getElement('.game-field__numbers');
    this.puzzle = this.view.getElement('.game-field__puzzle');
    this.image = new Image();

    this.setImageByLevel(0);
    // this.puzzle.style.backgroundImage = `url(${this.pictures[7]})`
    this.displayPuzzle();
    // this.changeImage(url);
  }

  getRow(number) {
    const rows = this.puzzle.children;

    return rows[number];
  }

  setImageByLevel(level) {
    this.image = this.pictures[level];
  }

  getRowPieces(rowN, sentence) {
    const row = this.getRow(rowN);
    const rowWidth = row.offsetWidth;
    const _sentence = sentence.replace(/<[^>]*>|\./g, '');
    const words = _sentence.split(/\s/);
    const allLettersCount = _sentence.replace(/\s/g, '').length;
    const k = rowWidth / allLettersCount;

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

      return this.createPiece(width, type);
    });

    console.log(pieces)
    return pieces;

  }

  displayPuzzle() {
    console.log('@displayPuzzleItem : ');
    const row = this.getRow(0);
    const row2 = this.getRow(1);
    const row3 = this.getRow(2);

    const pieces = this.getRowPieces(0, this.wordsList[0]);
    const pieces2 = this.getRowPieces(1, this.wordsList[1]);
    const pieces3 = this.getRowPieces(2, this.wordsList[2]);

    pieces.forEach( (piece) => {
      row.append( piece );
    });
    pieces2.forEach( (piece) => {
      row2.append( piece );
    });
    pieces3.forEach( (piece) => {
      row3.append( piece );
    });
    // const word = 'Test';
    // const url = 'https://gallerix.ru/pic/_EX/1016087178/713080393.jpeg';

    // const piece = this.view.createElement('div');

    // const pieces = [
    //   this.createPiece(110, this.pieceTypes.BEGINIG),
    //   this.createPiece(110),
    //   this.createPiece(110, this.pieceTypes.ENDING),
    // ];



    // img.src = this.pictures[7];
    //
    // img.onload = () => {
    //   pieces.forEach( (piece) => {
    //     this.drawImage( piece, img );
    //     row.append( piece );
    //   } );
    // }
  }

  render() {
    return this.view.render(GameField);
  }
}

export default Puzzle;
