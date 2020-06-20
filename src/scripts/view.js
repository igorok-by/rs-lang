import baseView from './utils/baseView';

export default {
  header: baseView.getElement('.app-header'),
  main: baseView.getElement('.app-main'),
  panel: baseView.getElement('.app-panel'),

  render(template, data) {
    const Markup = template.substr();

    if (data && typeof data === 'object') {
      return Object.keys(data).reduce((acc, prop) => {
        const re = new RegExp(`{{${prop}}}`, 'g');

        return acc.replace(re, data[prop]);
      }, Markup);
    }

    return template;
    // this.main.innerHTML = html;
  },

  showIn(target, html) {
    const targetElement = this[target];

    targetElement.innerHTML = html;
  },

};
