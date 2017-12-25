import React from 'react';
import {Product as P} from '../../models'

/**
 * Created by jkret on 25/12/2017.
 */
const Product = ({item, onItemClick}) => (
    <div className="item"
         onClick={() => onItemClick(P.id(item))}>
        <div className="item-name">
            {P.name(item)}
        </div>
    </div>
);

export default Product;
