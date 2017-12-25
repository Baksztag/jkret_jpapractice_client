/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';

import Product from './Product';

class Products extends Component {
    state = {
        loading: true,
        products: []
    };

    componentWillMount() {
        axios.get('http://localhost:4567/products')
            .then((res) => {
                this.setState({
                    loading: false,
                    products: res.data
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    products: []
                })
            })
    }

    render() {
        const {loading, products} = this.state;
        console.log(products)

        return (
            loading ?
                <div className="products-loading">Loading...</div>
                :
                <div className="products">
                    {products.map((product, index) => (
                        <Product key={index}
                                 product={product}/>
                    ))}
                </div>
        );
    }
}

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
