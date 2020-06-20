const URL_DATA_SEPARATOR = '&';
const DEFAULTS = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: '',
  withCredentials: false,
};

export const FetchRequire = async (url, {
  method = DEFAULTS.method,
  headers = DEFAULTS.headers,
  body = DEFAULTS.body,
  withCredentials = DEFAULTS.withCredentials,
}) => {
  console.log('FetchRequire', method, headers, body);
  try {
    const response = await fetch(url, {
      method,
      withCredentials,
      headers,
      body,
    });
    const data = await response.json();

    return data;
  } catch (e) {
    return null;
  }
};

export const UrlConstructor = (url, params, options = {}) => {
  const { separator = URL_DATA_SEPARATOR, equal = '=' } = options;

  return `${url}?${params
    .map((param) => Object
      .entries(param)
      .flat()
      .join(equal))
    .join(separator)}`;
};

export const UrlPath = (...args) => args.join('/');
