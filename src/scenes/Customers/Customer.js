import React from 'react';
import {Customer as C} from '../../models'

/**
 * Created by jkret on 25/12/2017.
 */
const Customer = ({customer}) => (
    <div className="item">
        <div className="item-name">
            {C.name(customer)}
        </div>

    </div>
);

export default Customer;
