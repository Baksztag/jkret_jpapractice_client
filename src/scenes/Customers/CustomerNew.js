import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CustomerNew extends Component {
    state = {
        companyName: '',
        street: '',
        city: '',
        zipCode: '',
        discount: 0.0
    };

    updateStringField = (fieldName) => {
        return (e) => {
            this.setState({
                [fieldName]: e.target.value
            })
        }
    };

    updateDiscount = (e) => {
        this.setState({
            discount: e.target.value
        })
    };

    render() {
        const {addNewCustomer} = this.props;
        const {companyName, street, city, zipCode, discount} = this.state;

        return (
            <div className="product-new">
                <div className="product-new-label">
                    Add new customer
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
                        Discount:
                    </div>
                    <input type="number"
                           value={discount}
                           onChange={this.updateDiscount}/>
                </div>
                <button onClick={() => addNewCustomer({...this.state})}>Submit</button>
            </div>
        );
    }
}

CustomerNew.propTypes = {
    addNewCustomer: PropTypes.func.isRequired
};
CustomerNew.defaultProps = {};

export default CustomerNew;
