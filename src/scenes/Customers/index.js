/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';

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
            loading ?
                <div className="list-loading">Loading...</div>
                :
                <div className="list">
                    {customers.map((customer, index) => (
                        <Customer key={index}
                                 customer={customer}/>
                    ))}
                </div>
        );
    }
}

Customers.propTypes = {};
Customers.defaultProps = {};

export default Customers;
