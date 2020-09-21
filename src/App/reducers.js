export default (state = {}, { type, payload }) => {
    switch(type) {
        case 'APP_SET_LOADING':
            return {
                ...state,
                loading: payload,
            };
        default:
            return state;
    }
};
