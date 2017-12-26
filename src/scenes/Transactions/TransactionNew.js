import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TransactionNew extends Component {
    state = {
        TransactionNumber: 0,
        Quantity: 0
    };

    updateField = (fieldName) => {
        return (e) => {
            this.setState({
                [fieldName]: e.target.value
            })
        };
    };

    render() {
        const {addNewTransaction} = this.props;
        const {TransactionNumber, Quantity} = this.state;

        return (
            <div className="transaction-new">
                <div className="transaction-new-label">
                    Add new transaction
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        Number:
                    </div>
                    <input type="number"
                           value={TransactionNumber}
                           onChange={this.updateField('TransactionNumber')}/>
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        Quantity:
                    </div>
                    <input type="number"
                           value={Quantity}
                           onChange={this.updateField('Quantity')}/>
                </div>
                <button onClick={() =>
                    addNewTransaction({...this.state})}>Submit</button>
            </div>
        );
    }
}

TransactionNew.propTypes = {
    addNewTransaction: PropTypes.func.isRequired
};
TransactionNew.defaultProps = {};

export default TransactionNew;
