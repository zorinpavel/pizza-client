import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid, Icon } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import MiddleContainer from 'components/Container';
import actions from './actions';

import css from './assets/login.scss';


class Login extends Component {
    state = {
        email: '',
        password: '',
        error: false
    }

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value, error: false });
    }

    login = async (e) => {
        e.preventDefault();

        const { user, error } = await this.props.login(this.state);

        if(user)
            this.props.history.push('/');
        else
            this.setState({ error });
    };

    render() {
        return (
            <MiddleContainer header="Необходимо авторизоваться" caption="Введите email и пароль">
                <form onSubmit={this.login}>
                    {
                        this.state.error &&
                            <Alert severity="error" className={css.errorContainer}>
                                <AlertTitle>Error</AlertTitle>
                                {this.state.error}
                            </Alert>
                    }
                    <Grid container justify="space-evenly" direction="column" alignItems="center" spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="email"
                                name="email"
                                label="E-mail"
                                variant="outlined"
                                fullWidth
                                required
                                type="email"
                                defaultValue=""
                                onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                required
                                type="password"
                                defaultValue=""
                                onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button
                                        component={Link}
                                        to="/auth/signup"
                                        variant="contained"
                                        color="secondary"
                                        disableElevation>Sign up</Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disableElevation>Log in</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        className={css.buttonVk}
                                        startIcon={<Icon />}
                                        disableElevation>VK</Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        className={css.buttonFacebook}
                                        startIcon={<Icon />}
                                        disableElevation>Facebook</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </MiddleContainer>
        );
    }
}

export default connect(
    undefined,
    {
        login: actions.login
    }
)(Login);
