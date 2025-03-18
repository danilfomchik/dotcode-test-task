import {TBitcoinTransaction} from '@/pages/Transactions/types';

export type TTransactionsState = {
    transactions: TBitcoinTransaction[];
    totalSum: number;
    isSubscribed: boolean;
    wsStatusMessage: string;
};
