import React from 'react';
import {Product as P} from '../../models'

/**
 * Created by jkret on 25/12/2017.
 */
const Product = ({product}) => (
    <div className="product">
        <div className="product-name">
            {P.name(product)}
        </div>

    </div>
);

export default Product;
