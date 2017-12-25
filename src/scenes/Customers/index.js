/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import '../../style/index.css';

import {List} from '../../components';
import {Customer as C} from '../../models';
import Customer from './Customer';
import CustomerDetails from './CustomerDetails';

class Customers extends Component {
    state = {
        loading: true,
        shouldUpdate: true,
        customers: [],
        customerDetails: {}
    };

    componentWillMount() {
        axios.get('http://localhost:4567/customers')
            .then((res) => {
                this.setState({
                    loading: false,
                    customers: res.data,
                    shouldUpdate: false
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    customers: [],
                    shouldUpdate: false
                })
            })
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.shouldUpdate) {
            axios.get('http://localhost:4567/customers')
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
        const {customers} = this.state;
        console.log(_.find(customers, (customer) => C.id(customer) === id))

        this.setState({
            customerDetails: _.find(customers, (customer) => C.id(customer) === id)
        })
    };

    render() {
        const {loading, customers, customerDetails} = this.state;
        console.log(customers)

        return (
            <div className="customer">
                <div className="customer-options">
                    <CustomerDetails customer={customerDetails}/>
                </div>
                <List ItemComponent={Customer}
                      items={customers}
                      onItemClick={this.onItemClick}
                      loading={loading}/>
            </div>
        );
    }
}

Customers.propTypes = {};
Customers.defaultProps = {};

export default Customers;
