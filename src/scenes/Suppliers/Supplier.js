import React from 'react';
import {Supplier as S} from '../../models'
import '../../style/list.css';

/**
 * Created by jkret on 25/12/2017.
 */
const Supplier = ({item, onItemClick, activeItemId}) => (
    <div className={`${S.id(item) === activeItemId ? "item-active" : "item"}`}
         onClick={() => onItemClick(S.id(item))}>
        <div className="item-name">
            {S.name(item)}
        </div>

    </div>
);

export default Supplier;
