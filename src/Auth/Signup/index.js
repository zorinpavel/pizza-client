import React, { Component } from 'react';
import { connect } from 'react-redux';
import MiddleContainer from 'components/Container';
import actions from './actions';


class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MiddleContainer header="Регистируйтесь!">
                угу
            </MiddleContainer>
        );
    }
}

export default connect()(SignUp);
