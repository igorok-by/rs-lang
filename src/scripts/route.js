import Controller from './controller';

Controller.showGame('englishPuzzle', { title: 'ENGLISH PUZZLE' });
setTimeout(() => {
  Controller.showGame('speakIt', { title: 'Speak It!' });
}, 5000);

const getRouteInfo = () => {
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  console.log('hash', hash)
  const [name, id] = hash.split('/');

  return { name, params: { id } };
};
const handleHash = () => {
  const { name, params } = getRouteInfo();
  console.log('name', name);
  Controller.showGame(name);
};

export default {
  init() {
    console.log('router init')
    window.addEventListener('hashchange', handleHash);
    handleHash();
  },
};
