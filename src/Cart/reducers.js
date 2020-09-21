import { getCartData } from 'helpers';


const initialState = getCartData().cart || { items: [], deliveryCost: 120, totalCost: 0 };

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case 'ADD_TO_CART':
            let totalCost = state.deliveryCost;

            state.items.forEach(pizza => totalCost += parseFloat(pizza.price));

            const cart = {
                ...state,
                totalCost,
                items: [
                    ...state.items,
                    payload
                ]
            };

            localStorage.setItem('cartData', JSON.stringify(cart));

            return cart;
        case 'CLEAR_CART':
            localStorage.removeItem('authData');

            return initialState;
        default:
            return state;
    }
};
