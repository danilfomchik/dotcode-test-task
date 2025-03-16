import {PayloadAction} from '@reduxjs/toolkit';

import {TBlock, TBlockSizes} from '@/services/types';

export type TBlockProps = {
    block: TBlock;
};

export type TUpdateBlockAction = PayloadAction<{
    id: number;
    newProps: Partial<TBlock>;
}>;

export type TDeleteBlockAction = PayloadAction<{
    id: number;
}>;

export type TBringToFrontAction = PayloadAction<{
    id: number;
}>;

export type TSetBlocksContainerSizeAction = PayloadAction<TBlockSizes>;
