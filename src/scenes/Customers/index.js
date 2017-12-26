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
import CustomerNew from './CustomerNew';

class Customers extends Component {
    state = {
        loading: true,
        shouldUpdate: true,
        customers: [],
        customerDetails: {}
    };

    addNewCustomer = (customer) => {
        this.setState({
            shouldUpdate: true
        }, () => {
            axios.post('http://localhost:4567/api/customer', customer)
                .then(() => this.setState({
                    shouldUpdate: false
                }))
                .catch(() => this.setState({
                    shouldUpdate: false
                }))
        })
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
                    <CustomerNew addNewCustomer={this.addNewCustomer}/>
                    <CustomerDetails customer={customerDetails}/>
                </div>
                <List ItemComponent={Customer}
                      items={customers}
                      activeItemId={C.id(customerDetails)}
                      onItemClick={this.onItemClick}
                      loading={loading}/>
            </div>
        );
    }
}

Customers.propTypes = {};
Customers.defaultProps = {};

export default Customers;
