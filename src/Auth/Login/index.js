import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid, Icon } from '@material-ui/core';
import MiddleContainer from 'components/Container';

import css from './assets/login.scss';


export default (props) => {
    const login = () => {
        setTimeout(() => props.history.push('/'), 1000);
    };

    return (
        <MiddleContainer header="Необходимо авторизоваться" caption="Введите email и пароль">
            <form>
                <Grid container justify="space-evenly" direction="column" alignItems="center" spacing={5}>
                    <Grid item>
                        <TextField id="email" label="Email" />
                    </Grid>
                    <Grid item>
                        <TextField id="password" label="Password" />
                    </Grid>
                    <Grid item>
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
                                    onClick={login}
                                    variant="contained"
                                    color="primary"
                                    disableElevation>Log in</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    className={css.buttonVk}
                                    startIcon={<Icon />}
                                    disableElevation
                                >VK</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    className={css.buttonFacebook}
                                    startIcon={<Icon />}
                                    disableElevation
                                >Facebook</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </MiddleContainer>
    );
};
