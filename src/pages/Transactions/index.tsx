import {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';

import Button from '@/components/Button';
import {useAppDispatch} from '@/redux/store';
import {selectIsSubscribed, selectTransactions} from '@/redux/transactions/selectors';
import {addTransaction, resetTransactions, setIsSubscribed} from '@/redux/transactions/transactionsSlice';
import {useWebSocketContext} from '@/services/hooks';

import TransactionsList from './TransactionsList';

const Transactions = () => {
    const {sendJsonMessage, readyState, lastJsonMessage} = useWebSocketContext();

    const dispatch = useAppDispatch();
    const transactions = useSelector(selectTransactions);
    const isSubscribed = useSelector(selectIsSubscribed);

    const onConnectOpen = useCallback(() => {
        sendJsonMessage({op: 'unconfirmed_sub'});
        dispatch(setIsSubscribed(true));
    }, [dispatch, sendJsonMessage]);

    const onConnectClose = useCallback(() => {
        sendJsonMessage({op: 'unconfirmed_unsub'});
        dispatch(setIsSubscribed(false));
    }, [dispatch, sendJsonMessage]);

    const onResetTransactions = useCallback(() => {
        dispatch(resetTransactions());
    }, [dispatch]);

    useEffect(() => {
        if (lastJsonMessage && lastJsonMessage.op === 'utx') {
            const transaction = lastJsonMessage.x;

            dispatch(addTransaction(transaction));
        }
    }, [lastJsonMessage, dispatch]);

    useEffect(() => {
        return () => {
            onConnectClose();
        };
    }, [onConnectClose]);

    return (
        <>
            <div className="flex gap-2 mb-6">
                <Button
                    className="hover:text-green-300 hover:border-green-300"
                    onClick={onConnectOpen}
                    disabled={readyState !== 1 || isSubscribed}>
                    Start
                </Button>
                <Button
                    className="hover:text-red-300 hover:border-red-300"
                    onClick={onConnectClose}
                    disabled={!isSubscribed}>
                    Stop
                </Button>
                <Button
                    className="hover:text-yellow-300 hover:border-yellow-300"
                    onClick={onResetTransactions}
                    disabled={!transactions.length}>
                    Reset
                </Button>
            </div>

            {!isSubscribed && !transactions.length && readyState === 1 ? (
                <h2 className="text-2xl font-bold text-center">To load Bitcoin Transactions click start button</h2>
            ) : (
                <TransactionsList transactions={transactions} />
            )}
        </>
    );
};

export default Transactions;
