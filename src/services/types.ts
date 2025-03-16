export enum RouterPaths {
    home = '/',
    transactions = '/transactions',
    notFound = '*',
}

export enum StorageKeys {
    blocks = 'blocks',
}

export type TBlockSizes = {
    width: number;
    height: number;
};

export type TBlock = {
    id: number;
    x: number;
    y: number;
    zIndex: number;
} & TBlockSizes;

export type TBlockPositions = Omit<TBlock, 'id' | 'zIndex'>;
