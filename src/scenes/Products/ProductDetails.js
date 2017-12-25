import React from 'react';
import PropTypes from 'prop-types';

import {Product as P} from '../../models';

const ProductDetails = ({product}) => (
    <div className="details">
        <div className="details-label">
            Product details
        </div>
        <div className="details-entry">
            Name: {P.name(product)}
        </div>
        <div className="details-entry">
            Units on stock: {P.unitsOnStock(product)}
        </div>
    </div>
);

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
};
ProductDetails.defaultProps = {};

export default ProductDetails;
