export default () => {
    try {
        let authData = JSON.parse(localStorage.getItem('authData'));

        return authData || {};
    } catch(e) {
        console.log(e);
        localStorage.removeItem('authData');

        return {};
    }
};
