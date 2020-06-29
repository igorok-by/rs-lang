/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable spaced-comment */
/* eslint-disable class-methods-use-this */
import { messages } from '../constants/index';
import { REST_URL } from '../utils/urls';
import { FetchRequire, UrlPath, UrlConstructor } from '../utils/fetch';

class Model {
  constructor() {
    this.token = '';
    this.userId = '';
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
      localStorage.setItem('userToken', this.token);
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
      if (!result.ok) {
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
      }
    });
    if (!result) return false;
    console.log(result);
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
  async getWords({ group, page }) {
    let url = UrlPath(REST_URL, 'words');

    if (group || page) {
      url = UrlConstructor(url, { group, page });
    }

    const result = await FetchRequire(url);

    return result;
  }
}

export default Model;
