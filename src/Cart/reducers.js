import { getCartData } from 'helpers';


const clearState = { items: [], deliveryCost: 120, totalCost: 0 };
const initialState = getCartData() || clearState;

export default (state = initialState, { type, payload }) => {
    let totalCost = state.deliveryCost,
        cart = { ...state };

    switch(type) {
        case 'ADD_TO_CART':
            state.items.forEach(pizza => totalCost += parseFloat(pizza.price));

            cart = {
                ...state,
                totalCost,
                items: [
                    ...state.items,
                    payload
                ]
            };

            localStorage.setItem('cartData', JSON.stringify(cart));

            return cart;
        case 'SET_CART':
            state.items.forEach(pizza => totalCost += parseFloat(pizza.price));

            cart = {
                ...state,
                totalCost,
            };

            localStorage.setItem('cartData', JSON.stringify(cart));

            return cart;
        case 'CLEAR_CART':
            localStorage.removeItem('cartData');

            return clearState;
        default:
            return state;
    }
};
