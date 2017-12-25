/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';

import {List} from '../../components';
import Supplier from './Supplier';

class Suppliers extends Component {
    state = {
        loading: true,
        suppliers: []
    };

    componentWillMount() {
        axios.get('http://localhost:4567/suppliers')
            .then((res) => {
                this.setState({
                    loading: false,
                    suppliers: res.data
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    suppliers: []
                })
            })
    }

    render() {
        const {loading, suppliers} = this.state;
        console.log(suppliers)

        return (
            <List ItemComponent={Supplier}
                  items={suppliers}
                  loading={loading}/>
        );
    }
}

Suppliers.propTypes = {};
Suppliers.defaultProps = {};

export default Suppliers;
