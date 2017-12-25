import _ from 'lodash';

const Product = {
    id: (product) => (_.get(product, "ProductId")),
    name: (product) => (_.get(product, 'ProductName')),
    unitsOnStock: (product) => (_.get(product, 'UnitsOnStock'))
};

export default Product;
