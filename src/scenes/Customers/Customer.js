import React from 'react';
import {Customer as C} from '../../models'
import '../../style/list.css';

/**
 * Created by jkret on 25/12/2017.
 */
const Customer = ({item, onItemClick, activeItemId}) => (
    <div className={`${C.id(item) === activeItemId ? "item-active" : "item"}`}
         onClick={() => onItemClick(C.id(item))}>
        <div className="item-name">
            {C.name(item)}
        </div>

    </div>
);

export default Customer;
