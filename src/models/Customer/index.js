import _ from 'lodash';

const Customer = {
    name: (customer) => (_.get(customer, 'companyName'))
};

export default Customer;
