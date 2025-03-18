import {memo} from 'react';
import {useSelector} from 'react-redux';

import {selectTotalSum, selectWsStatusMessage} from '@/redux/transactions/selectors';

import TransactionsItem from '../TransactionItem';
import {TTransactionsListProps} from './types';

const TransactionsList = ({transactions}: TTransactionsListProps) => {
    const totalSum = useSelector(selectTotalSum);
    const wsStatusMessage = useSelector(selectWsStatusMessage);

    return (
        <>
            {wsStatusMessage && <h2 className="text-2xl font-bold text-center mb-6">{wsStatusMessage}</h2>}

            <h2 className="text-5xl font-bold text-center mb-6 max-md:text-3xl">
                {transactions.length > 0 ? `Sum = ${totalSum.toFixed(8)} BTC` : 'Loading...'}
            </h2>

            <div className="flex flex-col gap-8 divide-y-2">
                {transactions.map((transaction, i) => (
                    <TransactionsItem key={`${transaction.hash}-${i}`} transaction={transaction} />
                ))}
            </div>
        </>
    );
};

export default memo(TransactionsList);
