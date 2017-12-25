/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import '../../style/index.css';

import {List} from '../../components';
import Customer from './Customer';

class Customers extends Component {
    state = {
        loading: true,
        customers: []
    };

    componentWillMount() {
        axios.get('http://localhost:4567/customers')
            .then((res) => {
                this.setState({
                    loading: false,
                    customers: res.data
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    customers: []
                })
            })
    }

    render() {
        const {loading, customers} = this.state;
        console.log(customers)

        return (
            <List ItemComponent={Customer}
                  items={customers}
                  loading={loading}/>
        );
    }
}

Customers.propTypes = {};
Customers.defaultProps = {};

export default Customers;
