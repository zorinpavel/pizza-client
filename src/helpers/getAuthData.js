export default () => {
    try {
        return localStorage.getItem('authToken');
    } catch(e) {
        console.log(e);
        localStorage.removeItem('authToken');

        return {};
    }
};
