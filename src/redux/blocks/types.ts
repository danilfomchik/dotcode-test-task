import {TBlock, TBlockSizes} from '@/services/types';

export type TBlocksState = {
    blocks: TBlock[];
    blocksContainerSize: TBlockSizes;
};
