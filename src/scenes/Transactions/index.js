/**
 * Created by jkret on 25/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';

import Transaction from './Transaction';

class Transactions extends Component {
    state = {
        loading: true,
        transactions: []
    };

    componentWillMount() {
        axios.get('http://localhost:4567/transactions')
            .then((res) => {
                this.setState({
                    loading: false,
                    transactions: res.data
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    transactions: []
                })
            })
    }

    render() {
        const {loading, transactions} = this.state;
        console.log(transactions)

        return (
            loading ?
                <div className="list-loading">Loading...</div>
                :
                <div className="list">
                    {transactions.map((transaction, index) => (
                        <Transaction key={index}
                                     transaction={transaction}/>
                    ))}
                </div>
        );
    }
}

Transactions.propTypes = {};
Transactions.defaultProps = {};

export default Transactions;
