import create from './utils/create';

export default class ProgressBar {
  constructor(sumOfCards) {
    this.sumOfCards = sumOfCards;
    this.counter = 0;
    this.barWidth = 0;
    this.container = create('div', 'progress');
    this.maxValue = create('span', 'progress__numb', `${sumOfCards}`);
    this.currentValue = create('span', 'progress__numb', `${this.counter}`);
    this.bar = create('div', 'progress__bar');
  }

  renderBar() {
    const background = create('div', 'progress__background', this.bar);
    this.container.append(this.currentValue, background, this.maxValue);

    this.bar.style.width = `${this.barWidth}%`;
    return this.container;
  }

  increaseProgress() {
    const bitOfWidth = 100 / this.sumOfCards;
    this.counter += 1;
    this.barWidth += bitOfWidth;

    this.currentValue.innerHTML = this.counter;
    this.bar.style.width = `${this.barWidth}%`;
  }
}
