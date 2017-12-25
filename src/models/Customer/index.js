import _ from 'lodash';

const Customer = {
    id: (customer) => (_.get(customer, 'companyId')),
    name: (customer) => (_.get(customer, 'companyName')),
    street: (customer) => (_.get(customer, 'street')),
    city: (customer) => (_.get(customer, 'city')),
    zipCode: (customer) => (_.get(customer, 'zipCode')),
    discount: (customer) => (_.get(customer, 'discount')),
};

export default Customer;
