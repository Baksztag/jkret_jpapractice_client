import _ from 'lodash';

const Supplier = {
    id: (supplier) => (_.get(supplier, 'companyId')),
    name: (supplier) => (_.get(supplier, 'companyName')),
    street: (supplier) => (_.get(supplier, 'street')),
    city: (supplier) => (_.get(supplier, 'city')),
    zipCode: (supplier) => (_.get(supplier, 'zipCode')),
    bankAccountNumber: (supplier) => (_.get(supplier, 'bankAccountNumber')),
};

export default Supplier;
