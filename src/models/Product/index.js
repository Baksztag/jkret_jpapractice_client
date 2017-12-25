import _ from 'lodash';

const Product = {
    name: (product) => (_.get(product, 'ProductName'))
};

export default Product;
