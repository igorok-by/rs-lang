const URL_DATA_SEPARATOR = '&';
const ParentData = {
  GET: {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
  POST: {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
    withCredentials: false,
  },
};

export const FetchRequire = async (url, data = {}) => {
  const { method: Method = 'GET' } = data;
  const ParentDataObject = ParentData[Method];
  if (ParentDataObject) {
    const Data = Object.assign(ParentDataObject, data);
    const response = await fetch(url, Data).catch();

    if (!response.ok) {
      const error = Object.assign(Error.prototype, {
        response,
      });
      throw error;
    }

    const result = await response.json();

    return result;
  }

  return null;
};

export const UrlConstructor = (url, params, options = {}) => {
  const { separator = URL_DATA_SEPARATOR, equalSign = '=' } = options;

  return `${url}?${
    Object.entries(params)
      .map((el) => el.join(equalSign))
      .join(separator)
  }`;
};

export const UrlPath = (...args) => args.join('/');
