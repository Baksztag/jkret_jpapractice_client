import React from 'react';
import PropTypes from 'prop-types';

import {Customer as C} from '../../models';

const CustomerDetails = ({customer}) => (
    <div className="details">
        <div className="details-label">
            Customer details
        </div>
        <div className="details-entry">
            Name: {C.name(customer)}
        </div>
        <div className="details-entry">
            Street: {C.street(customer)}
        </div>
        <div className="details-entry">
            City: {C.city(customer)}
        </div>
        <div className="details-entry">
            Zip code: {C.zipCode(customer)}
        </div>
        <div className="details-entry">
            Discount: {C.discount(customer)}
        </div>
    </div>
);

CustomerDetails.propTypes = {
    customer: PropTypes.object.isRequired
};
CustomerDetails.defaultProps = {};

export default CustomerDetails;
