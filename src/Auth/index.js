import React, { Fragment } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Logout from './Logout';
import Login from './Login';
import SignUp from './Signup';

export { default as reducers } from './reducers';


export default withRouter(() => (
    <Fragment>
        <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/signup" component={SignUp} />
            <Route exact path="/auth/logout" component={Logout} />
            <Redirect to="/auth/login" />
        </Switch>
    </Fragment>
));
