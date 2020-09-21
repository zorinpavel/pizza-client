import { fetch } from 'helpers';
import settings from 'settings';


const login = (userData) => (dispatch) => {
    dispatch({
        type: 'APP_SET_LOADING',
        payload: true,
    });

    return fetch({
        url: settings.API_URL + settings.LOGIN_PATH,
        method: 'POST',
        params: userData
    })
        .then(response => response.json())
        .then(payload => {
            dispatch({
                type: 'APP_SET_LOADING',
                payload: false,
            });

            dispatch({
                type: 'LOGIN',
                payload
            });

            return payload;
        })
        .catch(response => {
            dispatch({
                type: 'APP_SET_LOADING',
                payload: false,
            });

            return response;
        });
};


export default { login };
