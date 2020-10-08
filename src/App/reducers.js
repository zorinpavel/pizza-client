export default (state = { currency: 'RUB' }, { type, payload }) => {
    switch(type) {
        case 'APP_SET_LOADING':
            return {
                ...state,
                loading: payload,
            };
        case 'APP_SET_CURRENCY':
            return {
                ...state,
                currency: payload,
            };
        default:
            return state;
    }
};
