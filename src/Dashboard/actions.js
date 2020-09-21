import { fetch } from 'helpers';
import settings from 'settings';


const getMenu = () => (dispatch) => {
    dispatch({
        type: 'APP_SET_LOADING',
        payload: true,
    });

    return fetch({
        url: settings.API_URL + settings.MENU_PATH,
        method: 'GET',
    })
        .then(response => response.json())
        .then(payload => {
            dispatch({
                type: 'SET_MENU',
                payload
            });

            dispatch({
                type: 'APP_SET_LOADING',
                payload: false,
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


export default { getMenu };
