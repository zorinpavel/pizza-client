export default () => {
    try {
        let cartData = JSON.parse(localStorage.getItem('cartData'));

        return cartData || {};
    } catch(e) {
        console.log(e);
        localStorage.removeItem('cartData');

        return {};
    }
};
