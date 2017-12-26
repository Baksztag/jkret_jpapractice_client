import React from 'react';
import {Product as P} from '../../models';
import '../../style/list.css';

/**
 * Created by jkret on 25/12/2017.
 */
const Product = ({item, onItemClick, activeItemId}) => (
    <div className={`${P.id(item) === activeItemId ? "item-active" : "item"}`}
         onClick={() => onItemClick(P.id(item))}>
        <div className="item-name">
            {P.name(item)}
        </div>
    </div>
);

export default Product;
