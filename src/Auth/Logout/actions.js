const logout = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT'
    });

    return {};
};


export default { logout };
