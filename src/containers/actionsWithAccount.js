import { connect } from 'react-redux';
import React from 'react';

import { addAccount, editAccount, deleteAccount } from '../actions/index';
import CustomerItem from '../presentational/customerItem';

const mapStateToProps = state => ({
    accounts: state
});
const mapDispatchToProps = dispatch => ({
    add: (id, name, address, payment, cardNumber, expDate, cvvCode) => dispatch(addAccount(id, name, address, payment, cardNumber, expDate, cvvCode)),
    edit: (id, name, address, payment, cardNumber, expDate, cvvCode) => dispatch(editAccount(id, name, address, payment, cardNumber, expDate, cvvCode)),
    delete: id => dispatch(deleteAccount(id)),
});
class ActionsWithAccount extends React.Component {
    render() {
        return (
            <CustomerItem
                accounts={this.props.accounts}
                add={this.props.add}
                edit={this.props.edit}
                delete={this.props.delete}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsWithAccount)