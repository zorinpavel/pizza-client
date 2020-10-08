import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, CardActions, CardMedia, Button } from '@material-ui/core';
import Price from 'components/Price';

import css from './assets/pizza.scss';


class Pizza extends Component {
    constructor(props) {
        super(props);
    }

    handleOrder = (_id) => {
        this.props.dispatch({
            type: 'ADD_TO_CART',
            payload: this.props.menu.find(pizza => pizza._id === _id)
        });
    }

    render() {
        return (
            <Card className={css.wrapper} variant="outlined">
                <CardMedia
                    className={css.media}
                    image={this.props.image}
                    title={this.props.name}
                />
                <CardContent>
                    <h2 className={css.header}>{this.props.name}</h2>
                    <p className={css.description}>{this.props.description}</p>
                    <span className={css.price}><Price value={this.props.price} /></span>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => this.handleOrder(this.props._id)}
                        variant="contained"
                        color="primary"
                        size="small"
                        disableElevation>Заказать</Button>
                </CardActions>
            </Card>
        );
    }
}

export default connect(
    state => ({
        cart: state.cart,
        menu: state.menu,
    })
)(Pizza);
