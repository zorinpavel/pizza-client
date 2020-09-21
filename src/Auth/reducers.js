export default (state = {}, { type, payload }) => {
    switch(type) {
        case 'LOGIN':
            const { user, authToken } = payload;

            localStorage.setItem('authData', JSON.stringify({ authToken: payload.authToken }));

            return {
                ...state,
                user,
                authToken,
            };
        case 'LOGOUT':
            localStorage.setItem('authData', JSON.stringify({ authToken: payload.authToken }));

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
