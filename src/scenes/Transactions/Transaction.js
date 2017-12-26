import React from 'react';
import {Transaction as T} from '../../models'
import '../../style/list.css';

/**
 * Created by jkret on 25/12/2017.
 */
const Transaction = ({item, onItemClick, activeItemId}) => (
    <div className={`${T.id(item) === activeItemId ? "item-active" : "item"}`}
         onClick={() => onItemClick(T.id(item))}>
        <div className="item-name">
            {T.name(item)}
        </div>

    </div>
);

export default Transaction;
