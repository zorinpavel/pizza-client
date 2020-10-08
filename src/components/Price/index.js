import React, { Fragment } from 'react';
import { connect } from 'react-redux';


export default connect(
    state => ({
        currency: state.app.currency
    }),
)((props) => {
    let currencyName = '',
        value = props.value;

    switch(props.currency) {
        case 'RUB':
            currencyName = 'руб.';
            break;
        case 'USD':
            currencyName = '$';
            value = Math.round(((value / 70) + Number.EPSILON) * 100) / 100;
            break;
        case 'EUR':
            currencyName = <>&euro;</>;
            value = Math.round(((value / 80) + Number.EPSILON) * 100) / 100;
            break;
        default:
            break;
    }

    return (
        <Fragment>
            <b>{value}</b> {currencyName}
        </Fragment>
    );
});
