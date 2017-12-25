import React from 'react';
import {Supplier as S} from '../../models'

/**
 * Created by jkret on 25/12/2017.
 */
const Supplier = ({supplier}) => (
    <div className="supplier">
        <div className="supplier-name">
            {S.name(supplier)}
        </div>

    </div>
);

export default Supplier;
