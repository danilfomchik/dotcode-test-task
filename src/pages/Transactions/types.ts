export type TBitcoinTransaction = {
    hash: string;
    inputs: {prev_out: {addr: string; value: number}}[];
    out: {addr: string; value: number}[];
};

export type TTransaction = {
    op: string;
    x: TBitcoinTransaction;
};
