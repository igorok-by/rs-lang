import Model from './model';
import speakIt from '../speakIt';
import englishPuzzle from '../english-puzle';
import View from './view';

export default {
  games: { speakIt, englishPuzzle },
  showGame(game, params) {
    console.log('showGame', game)
    if (this.games[game]) {
      const html = this.games[game].render(params);
      // console.log('html', html);
      View.showIn('main', html);
    }
  },
  // async showSpeakIt(params){
  //   console.log('showEnglishPuzzle');
  //   const SpeakItHtml = SpeakIt.render('Speak it!');
  //
  //   View.showIn('main', SpeakItHtml);
  // },
  // async showEnglishPuzzle(params){
  //   console.log('showEnglishPuzzle');
  //   const EnglishPuzleHtml = EnglishPuzle.render({title: 'ENGLISH PUZZLE'});
  //
  //   View.showIn('main', EnglishPuzleHtml);
  // }
};
