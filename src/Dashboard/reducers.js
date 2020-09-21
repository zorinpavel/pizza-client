export default (state = [], { type, payload }) => {
    switch(type) {
        case 'ADD_TO_MENU':
            return [
                ...state,
                payload
            ];
        case 'SET_MENU':
            return payload;
        case 'SORT_BY_AMOUNT':
            return state;
        default:
            return state;
    }
};
