import markup from './index.html';
import View from '../scripts/view';
import './styles.scss';

// const games = Controller.games.values();
console.log('aside-panel', markup);
View.showIn('panel', markup);
