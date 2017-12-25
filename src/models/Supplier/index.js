import _ from 'lodash';

const Supplier = {
    name: (supplier) => (_.get(supplier, 'companyName'))
};

export default Supplier;
