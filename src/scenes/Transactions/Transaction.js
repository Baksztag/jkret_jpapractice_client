import React from 'react';
import {Transaction as T} from '../../models'

/**
 * Created by jkret on 25/12/2017.
 */
const Transaction = ({item}) => (
    <div className="item">
        <div className="item-name">
            {T.name(item)}
        </div>

    </div>
);

export default Transaction;
