import { fetch, getAuthData } from 'helpers';
import settings from 'settings';


const getApplicationData = () => (dispatch) => {
    dispatch({
        type: 'AUTH_SET_LOADING',
        payload: true,
    });

    dispatch({
        type: 'APP_SET_LOADING',
        payload: true,
    });

    const authToken = getAuthData();

    if(authToken) {
        return fetch({
            url: settings.API_URL + settings.USER_PATH,
            method: 'GET',
        })
            .then(response => response.json())
            .then(payload => {
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        ...payload,
                        authToken
                    }
                });

                dispatch({
                    type: 'AUTH_SET_LOADING',
                    payload: false,
                });

                dispatch({
                    type: 'APP_SET_LOADING',
                    payload: false,
                });

                return payload;
            })
            .catch(response => {
                dispatch({
                    type: 'AUTH_SET_LOADING',
                    payload: false,
                });

                dispatch({
                    type: 'APP_SET_LOADING',
                    payload: false,
                });

                return response;
            });
    } else {
        dispatch({
            type: 'AUTH_SET_LOADING',
            payload: false,
        });

        dispatch({
            type: 'APP_SET_LOADING',
            payload: false,
        });

        return {};
    }
};


export default { getApplicationData };
