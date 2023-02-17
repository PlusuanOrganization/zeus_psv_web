import { fetch } from 'whatwg-fetch';

import Config from '../constants/Config';

const http = {};

['POST'].forEach((method) => {
  http[method.toLowerCase()] = (url, data, headers) => {
    const formData = Object.keys(data).reduce((result, key) => {
      result.append(key, data[key]);

      return result;
    }, new FormData());

    return fetch(`${Config.SERVER_BASE_URL_CONTROLLER}${url}`, {
      method,
      headers,
      body: formData,
    })
      .then((response) =>
        response.json().then((body) => ({
          body,
          isError: response.status !== 200,
        })),
      )
      .then(({ body, isError }) => {
        if (isError) {
          throw body;
        }

        return body;
      });
  };
});

['GET'].forEach((method) => {
  http[method.toLowerCase()] = (url, data, headers) => {
    const formData = Object.keys(data).reduce((result, key) => {
      result.append(key, data[key]);

      return result;
    }, new FormData());

    return fetch(`${Config.SERVER_BASE_URL_CONTROLLER}${url}?${formData.toString()}`, {
      method,
      headers,
    })
      .then((response) =>
        response.json().then((body) => ({
          body,
          isError: response.status !== 200,
        })),
      )
      .then(({ body, isError }) => {
        if (isError) {
          throw body;
        }

        return body;
      });
  };
});

export default http;
