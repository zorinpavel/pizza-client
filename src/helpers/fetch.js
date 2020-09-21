import fetch from 'cross-fetch';
import getAuthData from './getAuthData';


export default options => {
    const method = options.method || 'GET';
    const params = options.params || {};

    if(method === 'GET' && Object.keys(params).length !== 0) {
        options.url += '?' +  Object.keys(params).map(key => (encodeURIComponent(key) + '=' +
                encodeURIComponent(params ? params[key] : '')
        )).join('&');
    }

    let headers = {
        'Content-Type': 'application/json'
    };

    if(options.authToken)
        headers.Authorization = 'Bearer ' + options.authToken;
    else if(options.authToken !== false)
        headers.Authorization = 'Bearer ' + getAuthData().authToken;

    if(options.headers) {
        headers = {
            ...headers,
            ...options.headers,
        };
    }

    let body = null;

    if(method !== 'GET')
        body = JSON.stringify(params);

    return fetch(options.url, {
        headers,
        method,
        body
    })
        .then(response => {
            if(response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        });
};
