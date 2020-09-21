import { fetch } from 'helpers';
import settings from 'settings';


const setOrder = (userData, cartData) => (dispatch) => {
    dispatch({
        type: 'APP_SET_LOADING',
        payload: true,
    });

    return fetch({
        url: settings.API_URL + settings.ORDER_PATH,
        method: 'POST',
        params: {
            ...userData,
            cart: cartData
        }
    })
        .then(response => response.json())
        .then(payload => {
            dispatch({
                type: 'APP_SET_LOADING',
                payload: false,
            });

            dispatch({
                type: 'CLEAR_CART'
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


export default { setOrder };
