import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import actions from './actions';
import Pizza from 'components/Pizza';

export { default as reducers } from './reducers';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        props.getMenu();
    }

    render() {
        return (
            <Container>
                <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing={2}>
                    {
                        this.props.menu.map((pizza, index) => {
                            return (
                                <Grid item md={4} sm={6} xs={12} key={index}>
                                    <Pizza {...pizza} />
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Container>
        );
    }
}

export default connect(
    state => ({
        menu: state.menu,
    }),
    {
        getMenu: actions.getMenu
    }
)(Dashboard);
