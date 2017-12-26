/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

import {List} from '../../components';
import {Transaction as T} from '../../models';
import Transaction from './Transaction';
import TransactionNew from './TransactionNew';

class Transactions extends Component {
    state = {
        loading: true,
        shouldUpdate: true,
        transactions: [],
        transactionDetails: {}
    };

    addNewTransaction = (transaction) => {
        this.setState({
            shouldUpdate: true
        }, () => {
            axios.post('http://localhost:4567/api/transaction', transaction)
                .then(() => this.setState({
                    shouldUpdate: false
                }))
                .catch(() => this.setState({
                    shouldUpdate: false
                }))
        })
    };

    componentWillMount() {
        axios.get('http://localhost:4567/transactions')
            .then((res) => {
                this.setState({
                    loading: false,
                    transactions: res.data,
                    shouldUpdate: false
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    transactions: [],
                    shouldUpdate: false
                })
            })
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.shouldUpdate) {
            axios.get('http://localhost:4567/transactions')
                .then((res) => {
                    this.setState({
                        loading: false,
                        transactions: res.data,
                        shouldUpdate: false
                    })
                })
                .catch(() => {
                    this.setState({
                        loading: false,
                        transactions: [],
                        shouldUpdate: false
                    })
                })
        }
    }

    onItemClick = (id) => {
        const {transactions} = this.state;
        console.log(_.find(transactions, (transaction) => T.id(transaction) === id))

        this.setState({
            transactionDetails: _.find(transactions, (transaction) => T.id(transaction) === id)
        })
    };

    render() {
        const {loading, transactions, transactionDetails} = this.state;
        console.log(transactions)

        return (
            <div className="transacion">
                <div className="transaction-options">
                    <TransactionNew addNewTransaction={this.addNewTransaction}/>
                </div>
                <List ItemComponent={Transaction}
                      items={transactions}
                      activeItemId={T.id(transactionDetails)}
                      onItemClick={this.onItemClick}
                      loading={loading}/>
            </div>

        );
    }
}

Transactions.propTypes = {};
Transactions.defaultProps = {};

export default Transactions;
