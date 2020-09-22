export default () => {
    try {
        return JSON.parse(localStorage.getItem('cartData'));
    } catch(e) {
        console.log(e);
        localStorage.removeItem('cartData');

        return {};
    }
};
