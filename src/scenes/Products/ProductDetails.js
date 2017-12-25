import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Product as P} from '../../models';

class ProductDetails extends Component {
    render() {
        const {product} = this.props;

        return (
            <div className="product-details">
                <div className="product-details-label">
                    Product details
                </div>
                <div className="name">
                    Name: {P.name(product)}
                </div>
                <div className="stock">
                    Units on stock: {P.unitsOnStock(product)}
                </div>
            </div>
        );
    }
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
};
ProductDetails.defaultProps = {};

export default ProductDetails;
