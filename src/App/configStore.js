import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';
import { reducers as authReducers } from 'Auth';
import { reducers as menuReducers } from 'Dashboard';
import { reducers as cartReducers } from 'Cart';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(
        combineReducers({
            app: appReducers,
            auth: authReducers,
            menu: menuReducers,
            cart: cartReducers,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
