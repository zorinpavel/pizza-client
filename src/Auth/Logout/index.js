import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import MiddleContainer from 'components/Container';
import actions from './actions';


export default connect(
    state => ({
        isAuth: !!state.auth.authToken,
        loading: !!state.app.loading,
    }),
    {
        logout: actions.logout
    }
)((props) => {
    const logout = () => {
        props.logout();
        props.history.push('/');
    };

    return (
        <MiddleContainer header="Хотите выйти?">
            <Button onClick={logout} variant="contained" color="primary" disableElevation>Logout</Button>
        </MiddleContainer>
    );
});

