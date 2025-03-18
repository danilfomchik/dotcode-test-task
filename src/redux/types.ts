export interface PreloadedState {
    [key: string]: unknown;
}

export enum SliceNames {
    blocksSlice = 'blocksData',
    transactionsSlice = 'transactionsData',
}
