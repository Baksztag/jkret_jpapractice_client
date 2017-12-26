import React from 'react';
import PropTypes from 'prop-types';

import {Transaction as T} from '../../models';

const TransactionDetails = ({transaction}) => (
    <div className="details">
        <div className="details-label">
            Transaction details
        </div>
        <div className="details-entry">
            Number: {T.name(transaction)}
        </div>
        <div className="details-entry">
            Quantity: {T.quantity(transaction)}
        </div>
    </div>
);

TransactionDetails.propTypes = {
    transaction: PropTypes.object.isRequired
};
TransactionDetails.defaultProps = {};

export default TransactionDetails;
