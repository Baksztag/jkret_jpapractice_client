/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

import {List} from '../../components';
import {Supplier as S} from '../../models';
import Supplier from './Supplier';
import SupplierDetails from './SupplierDetails';

class Suppliers extends Component {
    state = {
        loading: true,
        shouldUpdate: true,
        suppliers: [],
        supplierDetails: {}
    };

    componentWillMount() {
        axios.get('http://localhost:4567/suppliers')
            .then((res) => {
                this.setState({
                    loading: false,
                    suppliers: res.data,
                    shouldUpdate: false
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    suppliers: [],
                    shouldUpdate: false
                })
            })
    }

    onItemClick = (id) => {
        const {suppliers} = this.state;
        console.log(_.find(suppliers, (supplier) => S.id(supplier) === id))

        this.setState({
            supplierDetails: _.find(suppliers, (supplier) => S.id(supplier) === id)
        })
    };

    render() {
        const {loading, suppliers, supplierDetails} = this.state;
        console.log(suppliers)

        return (
            <div className="supplier">
                <div className="supplier-options">
                    <SupplierDetails supplier={supplierDetails}/>
                </div>
                <List ItemComponent={Supplier}
                      items={suppliers}
                      activeItemId={S.id(supplierDetails)}
                      onItemClick={this.onItemClick}
                      loading={loading}/>
            </div>
        );
    }
}

Suppliers.propTypes = {};
Suppliers.defaultProps = {};

export default Suppliers;
