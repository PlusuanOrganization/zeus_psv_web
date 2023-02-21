import { fetch } from 'whatwg-fetch';

import Config from '../constants/Config';

const http = {};

['POST', 'GET'].forEach((method) => {
  http[method.toLowerCase()] = (url, data, headers) => {
    const formData = Object.keys(data).reduce((result, key) => {
      result.append(key, data[key]);

      return result;
    }, new FormData());

    return fetch(`${Config.SERVER_BASE_URL_CONTROLLER}${url}`, {
      method,
      headers,
      body: method === 'POST' ? formData : undefined,
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
