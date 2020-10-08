import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Fade, Grid, LinearProgress, Badge, IconButton,
    Menu, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import { ShoppingCart, Menu as MenuIcon } from '@material-ui/icons';

import css from './assets/header.scss';


class Header extends Component {
    state = {
        anchorEl: false
    }

    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: false });
    };

    handleSetCurrency = (event) => {
        this.props.dispatch({
            type: 'APP_SET_CURRENCY',
            payload: event.target.value
        });
    };

    render() {
        const { name } = this.props.user || {};

        return (
            <header>
                <Container className={css.wrapper}>
                    <Grid container wrap="nowrap" alignItems="center">
                        <Grid item className={css.logo} xs>
                            <h1>Pizza header</h1>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl variant="outlined" fullWidth className={css.currencyControl}>
                                <InputLabel id="currency">Валюта</InputLabel>
                                <Select
                                    labelId="currency-label"
                                    id="currency-select"
                                    value={this.props.currency}
                                    onChange={this.handleSetCurrency}
                                    label="Валюта"
                                >
                                    <MenuItem value="EUR">Euro</MenuItem>
                                    <MenuItem value="USD">USD</MenuItem>
                                    <MenuItem value="RUB">Рубли</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Badge badgeContent={this.props.cart} color="secondary">
                                <IconButton component={Link} to="/cart">
                                    <ShoppingCart />
                                </IconButton>
                            </Badge>
                        </Grid>
                        <Grid item>
                            <b>{name}</b>
                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                            >
                                <MenuItem
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/">Dashboard</MenuItem>
                                {
                                    name &&
                                    <MenuItem
                                        onClick={this.handleClose}
                                        component={Link}
                                        to="/my">My account</MenuItem>
                                }
                                {
                                    name &&
                                    <MenuItem
                                        onClick={this.handleClose}
                                        component={Link}
                                        to="/auth/logout">Logout</MenuItem>
                                }
                                {
                                    !name &&
                                        <MenuItem
                                            onClick={this.handleClose}
                                            component={Link}
                                            to="/auth/login">Login</MenuItem>
                                }
                            </Menu>
                        </Grid>
                    </Grid>
                </Container>
                <Fade in={this.props.loading} unmountOnExit>
                    <LinearProgress color="primary" className="linear-progress" />
                </Fade>
            </header>
        );
    }
}


export default connect(
    state => ({
        loading: state.app.loading,
        user: state.auth.user,
        cart: state.cart.items.length,
        currency: state.app.currency || 'RUB'
    }),
)(Header);
