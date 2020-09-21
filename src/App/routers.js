import React, { Fragment, Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import Header from 'components/Header';
import Dashboard from 'Dashboard';
import Auth from 'Auth';
import Cart from 'Cart';
import Checkout from 'Cart/Checkout';
import My from 'My';
import NotFound from 'NotFound';
import actions from './actions';


class AppRouters extends Component {
    constructor(props) {
        super(props);

        props.getApplicationData();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/auth" component={Auth} />
                    <Route exact path="/cart" component={Cart} />
                    <Route path="/cart/checkout" component={Checkout} />
                    <PrivateRoute path="/my" component={My} />
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
        );
    }
}

export default withRouter(connect(
    undefined,
    {
        getApplicationData: actions.getApplicationData
    },
)(AppRouters));
