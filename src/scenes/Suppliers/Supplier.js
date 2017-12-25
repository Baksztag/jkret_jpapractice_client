import React from 'react';
import {Supplier as S} from '../../models'

/**
 * Created by jkret on 25/12/2017.
 */
const Supplier = ({item}) => (
    <div className="item">
        <div className="item-name">
            {S.name(item)}
        </div>

    </div>
);

export default Supplier;
