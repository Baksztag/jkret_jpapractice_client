import React from 'react';
import PropTypes from 'prop-types';

import {Supplier as S} from '../../models';

const SupplierDetails = ({supplier}) => (
    <div className="details">
        <div className="details-label">
            Customer details
        </div>
        <div className="details-entry">
            Name: {S.name(supplier)}
        </div>
        <div className="details-entry">
            Street: {S.street(supplier)}
        </div>
        <div className="details-entry">
            City: {S.city(supplier)}
        </div>
        <div className="details-entry">
            Zip code: {S.zipCode(supplier)}
        </div>
        <div className="details-entry">
            Discount: {S.bankAccountNumber(supplier)}
        </div>
    </div>
);

SupplierDetails.propTypes = {
    supplier: PropTypes.object.isRequired
};
SupplierDetails.defaultProps = {};

export default SupplierDetails;
