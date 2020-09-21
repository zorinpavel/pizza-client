import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({
    isAuth,
    loading,
    component: Component,
    ...rest
}) => {
    return (
        !loading && (
            <Fragment>
                <Route {...rest} component={(props) => {
                    return (
                        isAuth ? <Component {...props} /> : <Redirect to="/auth/login" />
                    );
                }} />
            </Fragment>
        )
    );
};

export default connect(
    state => ({
        isAuth: !!state.auth.authToken,
        loading: !!state.auth.loading,
    })
)(PrivateRoute);
