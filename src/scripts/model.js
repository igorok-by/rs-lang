import { messages } from './constants/index';
import { REST_URL } from './urls/index';
import { FetchRequire, UrlPath } from './utils/fetch';

// export default {
const Model = {
  token: '',
  userId: '',
  async login(user) {
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
  },
  async createUser(user) {
    console.log('createUser', user);
    const url = UrlPath(REST_URL, 'users');
    const result = await FetchRequire(url, {
      method: 'POST',
      body: JSON.stringify(user),
    });
    console.log(result);

    return result;
  },
  async createUserWord({ userId, wordId, word }) {
    const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    });
    const content = await rawResponse.json();

    console.log(content);
  },
  async getUserWord(wordId) {
    const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${this.userId}/words/${wordId}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
      },
    });
    const content = await rawResponse.json();

    console.log(content);
  },
}

export default Model;
