export default (state = {}, { type, payload }) => {
    switch(type) {
        case 'LOGIN':
            const { user, authToken } = payload;

            return {
                ...state,
                user,
                authToken,
            };
        case 'LOGOUT':
            return {};
        case 'AUTH_SET_LOADING':
            return {
                ...state,
                loading: payload,
            };
        default:
            return state;
    }
};
