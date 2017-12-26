import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SupplierNew extends Component {
    state = {
        companyName: '',
        street: '',
        city: '',
        zipCode: '',
        bankAccountNumber: ''
    };

    updateStringField = (fieldName) => {
        return (e) => {
            this.setState({
                [fieldName]: e.target.value
            })
        }
    };

    render() {
        const {addNewSupplier} = this.props;
        const {companyName, street, city, zipCode, bankAccountNumber} = this.state;

        return (
            <div className="supplier-new">
                <div className="supplier-new-label">
                    Add new supplier
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        Name:
                    </div>
                    <input type="text"
                           value={companyName}
                           onChange={this.updateStringField('companyName')}/>
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        Street:
                    </div>
                    <input type="text"
                           value={street}
                           onChange={this.updateStringField('street')}/>
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        City:
                    </div>
                    <input type="text"
                           value={city}
                           onChange={this.updateStringField('city')}/>
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        Zip code:
                    </div>
                    <input type="text"
                           value={zipCode}
                           onChange={this.updateStringField('zipCode')}/>
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        Bank account number:
                    </div>
                    <input type="text"
                           value={bankAccountNumber}
                           onChange={this.updateStringField('bankAccountNumber')}/>
                </div>
                <button onClick={() => addNewSupplier({...this.state})}>Submit</button>
            </div>
        );
    }
}

SupplierNew.propTypes = {
    addNewSupplier: PropTypes.func.isRequired
};
SupplierNew.defaultProps = {};

export default SupplierNew;
