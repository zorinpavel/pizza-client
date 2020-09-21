const logout = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT'
    });

    localStorage.removeItem('authData');

    return {};
};


export default { logout };
