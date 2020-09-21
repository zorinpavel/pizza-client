import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grid, Button } from '@material-ui/core';
import css from './assets/cart.scss';

export { default as reducers } from './reducers';


class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Grid container alignItems="stretch" spacing={2}>
                    { this.props.cart.items.map((pizza, i) => (
                        <Grid item md={6} key={i}>
                            <Grid container justify="flex-start" alignItems="stretch" className={css.itemContainer}>
                                <Grid item>
                                    <img src={pizza.image} className={css.image} />
                                </Grid>
                                <Grid item xs>
                                    <h3>{pizza.name}</h3>
                                    <p>{pizza.description}</p>
                                </Grid>
                                <Grid item>
                                    {pizza.price}
                                </Grid>
                            </Grid>
                        </Grid>
                    )) }
                </Grid>
                <div className={css.checkout}>
                    <Grid container spacing={3} className={css.checkoutRow}>
                        <Grid item xs>Доставка</Grid>
                        <Grid item>{this.props.cart.deliveryCost.toFixed(2)}</Grid>
                    </Grid>
                    <Grid container spacing={3} className={css.checkoutRow}>
                        <Grid item xs>Total cost</Grid>
                        <Grid item>{this.props.cart.totalCost.toFixed(2)}</Grid>
                    </Grid>
                    <Grid container spacing={3} className={css.checkoutRow}>
                        <Grid item xs>
                            <Button
                                color="secondary"
                                variant="contained"
                                disableElevation
                                component={Link}
                                to="/cart/checkout">Checkout</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
}

export default connect(
    state => ({
        cart: state.cart
    })
)(Cart);
