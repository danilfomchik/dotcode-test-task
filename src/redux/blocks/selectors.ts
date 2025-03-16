import {RootState} from '../store';

export const selectBlocks = (state: RootState) => state.blocksData.blocks;
export const selectContainerSize = (state: RootState) => state.blocksData.blocksContainerSize;
