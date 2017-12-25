import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductNew extends Component {
    state = {
        productName: '',
        unitsOnStock: 0
    };

    updateProductName = (e) => {
        this.setState({
            productName: e.target.value
        })
    };

    updateUnitsOnStock = (e) => {
        this.setState({
            unitsOnStock: e.target.value
        })
    };

    render() {
        const {addNewProduct} = this.props;
        const {productName, unitsOnStock} = this.state;

        return (
            <div className="product-new">
                <div className="product-new-label">
                    Add new product
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        Name:
                    </div>
                    <input type="text"
                           value={productName}
                           onChange={this.updateProductName}/>
                </div>
                <div className="new-item-input">
                    <div className="new-item-input-label">
                        Unit on stock:
                    </div>
                    <input type="number"
                           value={unitsOnStock}
                           onChange={this.updateUnitsOnStock}/>
                </div>
                <button onClick={() =>
                    addNewProduct({
                        ProductName: productName,
                        UnitsOnStock: unitsOnStock
                    })}>Submit</button>
            </div>
        );
    }
}

ProductNew.propTypes = {
    addNewProduct: PropTypes.func.isRequired
};
ProductNew.defaultProps = {};

export default ProductNew;
