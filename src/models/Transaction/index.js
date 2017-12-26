import _ from 'lodash';

const Transaction = {
    id: (transaction) => (_.get(transaction, 'TransactionId')),
    name: (transaction) => (_.get(transaction, 'TransactionNumber')),
    quantity: (transaction) => (_.get(transaction, 'Quantity'))
};

export default Transaction;
