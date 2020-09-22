import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import MiddleContainer from 'components/Container';
import actions from './actions';

import css from './assets/checkout.scss';


class Checkout extends Component {
    state = {
        success: false,
        error: false
    }

    constructor(props) {
        super(props);

        if(props.cart.items.length <= 0)
            props.history.push('/');
    }

    handleChange = (e) => {
        e.preventDefault();
        const user = { ...this.state.user, ...this.props.user };

        this.setState({ user: { ...user, [e.target.name]: e.target.value } });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const user = { ...this.state.user, ...this.props.user };
        const { order, error } = await this.props.setOrder(user, this.props.cart);

        if(order)
            this.setState({ success: true });
        else
            this.setState({ error });
    }

    render() {
        const { name, email, address } = this.state.user || this.props.user || {};

        return (
            <MiddleContainer header="Введите данные" caption="Укажите адрес и e-mail">
                {
                    this.state.error &&
                    <Alert severity="error" className={css.errorContainer}>
                        <AlertTitle>Error</AlertTitle>
                        {this.state.error}
                    </Alert>
                }

                {this.state.success ?
                    (
                        <Fragment>
                            <h1>Success</h1>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disableElevation
                                component={Link}
                                to="/">Вернуться</Button>
                        </Fragment>
                    ) : (
                        <form onSubmit={this.handleSubmit}>
                            <Grid container alignItems="flex-start" spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        defaultValue={name}
                                        onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="E-mail"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        type="email"
                                        defaultValue={email}
                                        onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        multiline
                                        rows={4}
                                        id="address"
                                        name="address"
                                        label="Address"
                                        variant="outlined"
                                        fullWidth
                                        defaultValue={address}
                                        onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        disableElevation>Send it</Button>
                                </Grid>
                            </Grid>
                        </form>
                    )
                }
            </MiddleContainer>
        );
    }
}

export default connect(
    state => ({
        user: state.auth.user,
        cart: state.cart
    }),
    {
        setOrder: actions.setOrder
    }
)(Checkout);
