import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import MiddleContainer from 'components/Container';
import actions from './actions';


class Checkout extends Component {
    state = {
        name: '',
        email: '',
        address: '',
        success: false
    }

    constructor(props) {
        super(props);

        if(props.cart.items.length <= 0)
            props.history.push('/');
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.props.setOrder(this.state, this.props.cart);
        this.setState({ success: true });
    }

    render() {
        return (
            <MiddleContainer header="Введите данные" caption="Укажите адрес и e-mail">
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
                                <Grid item xs sm={6}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        defaultValue=""
                                        onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs sm={6}>
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
                                <Grid item xs sm={12}>
                                    <TextField
                                        multiline
                                        rows={4}
                                        id="address"
                                        name="address"
                                        label="Address"
                                        variant="outlined"
                                        fullWidth
                                        defaultValue=""
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
        cart: state.cart
    }),
    {
        setOrder: actions.setOrder
    }
)(Checkout);
