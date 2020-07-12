/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable spaced-comment */
/* eslint-disable class-methods-use-this */
import { messages } from '../constants/index';
import { REST_URL, MEDIA_CONTENT_URL } from '../utils/urls';
import { FetchRequire, UrlPath, UrlConstructor } from '../utils/fetch';

const synth = window.speechSynthesis;
const STORAGE_NAME = 'rs-lang-token';

import View from './view';

class Model {
  // TODO
  constructor() {
    this.token = '';
    this.userId = '';
    this.utterance = new SpeechSynthesisUtterance();
  }
  // isSignIn(){
  //   const string = localStorage.getItem(STORAGE_NAME);
  // }
  async signIn(user) {
    console.log('login', user);
    const url = UrlPath(REST_URL, 'signin');
    const result = await FetchRequire(url, {
      method: 'POST',
      body: JSON.stringify(user),
    });
    const view = new View();
    if (result && result.message === messages.LOGIN_SUCCESS) {
      this.token = result.token;
      this.userId = result.userId;
      localStorage.setItem('userToken', this.token);
      view.hideModal();
      location = '/';
      console.log('ok');
    }

    return result;
  }

  async createUser(user) {
    console.log('createUser', user);
    const url = UrlPath(REST_URL, 'users');
    const result = await FetchRequire(url, {
      method: 'POST',
      body: JSON.stringify(user),
    }).catch((err) => {
      const email = document.querySelector('input[name="email"]');
      const password = document.querySelector('input[name="password"]');
      console.log(err);
      /* if (!result.ok) {
        console.log(result);
        const errors = result.error.errors;
        if (errors.length === 2) {
          email.value = '';
          email.placeholder = errors[0].message;
          password.value = '';
          password.placeholder = errors[1].message;
        } else {
        const validResult = errors[0].path === 'email' ? true : false;
        console.log(validResult);
          if (validResult) {
            email.value = '';
            email.placeholder = errors[0].message;
          } else {
            password.value = '';
            password.placeholder = errors[0].message;
          }
        }
        console.log(errors);
        return false;
      } */
    });
    if (!result) return false;
    this.signIn(user);
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

  playAudio(path) {
    const url = UrlPath(MEDIA_CONTENT_URL, path);

    const audio = new Audio(url);

    audio.play();

    return audio;
  }
}

export default Model;
