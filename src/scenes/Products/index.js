/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

import {List} from '../../components';
import {Product as P} from '../../models';
import Product from './Product';
import ProductNew from './ProductNew';
import ProductDetails from './ProductDetails';

class Products extends Component {
    state = {
        loading: true,
        shouldUpdate: true,
        products: [],
        productDetails: {}
    };

    addNewProduct = (product) => {
        this.setState({
            shouldUpdate: true
        }, () => {
            axios.post('http://localhost:4567/api/product', product)
                .then(() => this.setState({
                    shouldUpdate: false
                }))
                .catch(() => this.setState({
                    shouldUpdate: false
                }))
        })

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

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.shouldUpdate) {
            axios.get('http://localhost:4567/products')
                .then((res) => {
                    this.setState({
                        loading: false,
                        products: res.data,
                        shouldUpdate: false
                    })
                })
                .catch(() => {
                    this.setState({
                        loading: false,
                        products: [],
                        shouldUpdate: false
                    })
                })
        }
    }

    onItemClick = (id) => {
        const {products} = this.state;

        this.setState({
            productDetails: _.find(products, (product) => P.id(product) === id)
        })
    };

    render() {
        const {loading, products, productDetails} = this.state;

        return (
            <div className="product">
                <div className="product-options">
                    <ProductNew addNewProduct={this.addNewProduct}/>
                    <ProductDetails product={productDetails}/>
                </div>
                <List ItemComponent={Product}
                      onItemClick={this.onItemClick}
                      activeItemId={P.id(productDetails)}
                      items={products}
                      loading={loading}/>
            </div>
        );
    }
}

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
