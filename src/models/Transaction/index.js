import _ from 'lodash';

const Transaction = {
    name: (transaction) => (_.get(transaction, 'TransactionNumber'))
};

export default Transaction;
