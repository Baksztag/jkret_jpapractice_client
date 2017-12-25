import React from 'react';
import {Customer as C} from '../../models'
import '../../style/index.css';

/**
 * Created by jkret on 25/12/2017.
 */
const Customer = ({item}) => (
    <div className="item">
        <div className="item-name">
            {C.name(item)}
        </div>

    </div>
);

export default Customer;
