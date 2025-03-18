import {RootState} from '../store';

export const selectTransactions = (state: RootState) => state.transactionsData.transactions;
export const selectTotalSum = (state: RootState) => state.transactionsData.totalSum;
export const selectWsStatusMessage = (state: RootState) => state.transactionsData.wsStatusMessage;
export const selectIsSubscribed = (state: RootState) => state.transactionsData.isSubscribed;
