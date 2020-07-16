/* eslint-disable class-methods-use-this */
import { messages } from '../constants/index';
import { REST_URL, MEDIA_CONTENT_URL } from '../utils/urls';
import { FetchRequire, UrlPath, UrlConstructor } from '../utils/fetch';

import View from './view';

const synth = window.speechSynthesis;
const STORAGE_NAME = 'rs-lang';

class Model {
  // TODO
  constructor() {
    this.token = '';
    this.userId = '';
    this.games = [];
    this.utterance = new SpeechSynthesisUtterance();
    this.defaultSettings = {
      wordsPerDay: 15,
      optional: {
        picture: true,
        transcription: false,
        translate: true,
        meaningEng: true,
        meaningRu: true,
        example: true,
        lookBtn: true,
        inComplicatedList: false,
        difficulty: true,
      },
      // dayWordsCount: 20,
    };
    this.saveSettingsTimeout = null;
  }

  // async init() {
  //   console.log('model.init');
  //   await this.userInit();
  //   await this.SettingsInit();
  // }

  userInit() {
    if (!this.userId) {
      const user = this.load('user');

      if (!user || !user.userId || !user.token) {
        this.displayLogin();
      } else {
        this.setUser(user);

        this.signedFinish();
      }
    }
  }

  setUser({ token = '', userId = '' } = {}) {
    this.token = token;
    this.userId = userId;
    this.save('user', { token, userId });
  }

  async SettingsInit() {
    try {
      const settings = await this.getUserSettings();
      if (!settings) {
        this.setUserSettings(this.defaultSettings);
        this.settings = this.defaultSettings;
      } else {
        this.settings = settings;
      }
    } catch (e) {
      if (e.response.status === 404) {
        this.setUserSettings(this.defaultSettings);
        this.settings = this.defaultSettings;
      }
      console.log(e.response);
    }
  }

  async signIn(user) {
    console.log('login', user);
    const url = UrlPath(REST_URL, 'signin');
    const result = await FetchRequire(url, {
      method: 'POST',
      body: JSON.stringify(user),
    });

    if (result && result.message === messages.LOGIN_SUCCESS) {
      this.token = result.token;
      this.userId = result.userId;
    }

    return result;
  }

  logout() {
    this.setUser();
    // this.displayLogin();
  }
  // message: "Authenticated"
  // refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGNhMDBhZjI2ZGUyMDAxNzQ3YzYwYSIsInRva2VuSWQiOiIxMDE2MzkxMi00ZmExLTQyZWUtYmM4ZS1mZWU4YWU3ZDdhOGYiLCJpYXQiOjE1OTQ2NjMwMzgsImV4cCI6MTU5NDY3OTIzOH0.aawfeoMJftXVbk2J6F_wMH3ZAciK7aZWtNijAlljY5Y"
  // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGNhMDBhZjI2ZGUyMDAxNzQ3YzYwYSIsImlhdCI6MTU5NDY2MzAzOCwiZXhwIjoxNTk0Njc3NDM4fQ.DsrF0dyJDtG0lviibHQLLIFa_DN2YEM_Er8nIG4PpTI"
  // userId: "5f0ca00af26de2001747c60a"

  // email: "test23@rrr.by"
  // id: "5f0ca0cbf26de2001747c647"

  async createUser(user) {
    const url = UrlPath(REST_URL, 'users');
    const result = await FetchRequire(url, {
      method: 'POST',
      body: JSON.stringify(user),
    });

    // email: "test23@rrr.by"
    // id: "5f0ca0cbf26de2001747c647"

    return result;
  }

  async getUserSettings() {
    const url = UrlPath(REST_URL, 'users', this.userId, 'settings');
    const result = await FetchRequire(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return result;
  }

  async setUserSettings({ wordsPerDay, optional } = {}) {
    const url = UrlPath(REST_URL, 'users', this.userId, 'settings');
    console.log('setUserSettings', url, { token: this.token });

    const result = await FetchRequire(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wordsPerDay, optional }),
    });
    console.log('setUserSettings', result);
    return result;
  }

  async createUserWord({ wordId, word }) {
    console.log('createUserWord', wordId, word);
    const url = UrlPath(REST_URL, 'users', this.userId, 'words', wordId);
    const result = await FetchRequire(url, {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    });
    return result;
  }

  async getUserWord(wordId) {
    const url = UrlPath(REST_URL, 'users', this.userId, 'words', wordId);
    const result = await FetchRequire(url, {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return result;
  }

  async getUserWords() {
    const url = UrlPath(REST_URL, 'users', this.userId, 'words');
    const result = await FetchRequire(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return result;
  }

  // id: "5e9f5ee35eb9e72bc21af4af"
  // group: 0
  // page: 0
  // word: "typical"
  // image: "files/01_0016.jpg"
  // audio: "files/01_0016.mp3"
  // audioMeaning: "files/01_0016_meaning.mp3"
  // audioExample: "files/01_0016_example.mp3"
  // textMeaning: "If something is <i>typical</i>, it is normal, or something that usually happens."
  // textExample: "My <b>typical</b> breakfast is toast and eggs."
  // transcription: "[típikəl]"
  // textExampleTranslate: "Мой типичный завтрак - тост и яйца"
  // textMeaningTranslate: "Если что-то типичное, это нормально, или что-то, что обычно происходит"
  // wordTranslate: "типичный"
  // wordsPerExampleSentence: 7
  async getWords({ group, page } = {}) {
    let url = UrlPath(REST_URL, 'words');

    if (group || page) {
      url = UrlConstructor(url, { group, page });
    }

    const result = await FetchRequire(url);

    return result;
  }

  speak(text, language) {
    const voices = synth.getVoices();
    const langVoice = voices.find(({ lang }) => lang === language);
    this.utterance.text = text;

    this.utterance.voice = langVoice;

    synth.speak(this.utterance);
  }

  async getImageUrl(path) {
    return UrlPath(MEDIA_CONTENT_URL, path);
  }

  save(key, value) {
    const data = this.load(key) || {};

    data[key] = value;

    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
  }

  load(key) {
    const data = localStorage.getItem(STORAGE_NAME);

    try {
      const O = JSON.parse(data);

      if (key === 'all') {
        return O;
      }

      return O[key];
    } catch (e) {
      return null;
    }
  }

  playAudio(path) {
    const url = UrlPath(MEDIA_CONTENT_URL, path);

    const audio = new Audio(url);

    audio.play();

    return audio;
  }

  async signed({ token, userId }) {
    this.setUser({ token, userId });

    this.signedFinish();
  }

  bindSignedFinish(cb) {
    this.signedFinish = cb;
  }

  bindDisplayMainSettings(cb) {
    this.displayMainSettings = cb;
  }

  bindDisplayLogin(cb) {
    this.displayLogin = cb;
  }

  bindDisplayMainPage(cb) {
    this.displayMainPage = cb;
  }

  bindGameSettings(game) {
    this.games.push(game);
  }

  async mainSettingsChange(setting, value) {
    console.log('@mainSettingsChange : ', setting, value);
    const hasOwn = Object.prototype.hasOwnProperty;

    if (setting === 'wordsPerDay') {
      this.settings.wordsPerDay = value;
    }

    if (hasOwn.call(this.settings.optional, setting)) {
      this.settings.optional[setting] = value;
    }

    this.displayMainSettings(this.settings);
    this.games.map((game) => game.checkSettings());

    // clearTimeout(this.saveSettingsTimeout);
    // this.saveSettingsTimeout = setTimeout(async () => {
    //   await this.setUserSettings(this.settings);
    // }, 5000);
  }
}

export default Model;
