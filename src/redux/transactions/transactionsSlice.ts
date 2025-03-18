import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {TBitcoinTransaction} from '@/pages/Transactions/types';
import {getTransactionsSum} from '@/services/utils';

import {SliceNames} from '../types';
import {TTransactionsState} from './types';

const reducers = {
    addTransaction: (state: TTransactionsState, action: PayloadAction<TBitcoinTransaction>) => {
        const transaction = action.payload;

        if (transaction.inputs.length > 0 && transaction.out.length > 0) {
            state.transactions = [transaction, ...state.transactions.slice(0, 9)]; // last 10 transactions
            state.totalSum += getTransactionsSum(transaction);
        }
    },
    resetTransactions: (state: TTransactionsState) => {
        state.transactions = [];
        state.totalSum = 0;
    },
    setWsStatusMessage: (state: TTransactionsState, action: PayloadAction<string>) => {
        state.wsStatusMessage = action.payload;
    },
    setIsSubscribed: (state: TTransactionsState, action: PayloadAction<boolean>) => {
        state.isSubscribed = action.payload;
    },
};

const initialState: TTransactionsState = {
    transactions: [],
    totalSum: 0,
    isSubscribed: false,
    wsStatusMessage: '',
};

const transactionsSlice = createSlice({
    name: SliceNames.transactionsSlice,
    initialState,
    reducers,
});

export const {addTransaction, resetTransactions, setWsStatusMessage, setIsSubscribed} = transactionsSlice.actions;
export default transactionsSlice;
