import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {
    TBringToFrontAction,
    TDeleteBlockAction,
    TSetBlocksContainerSizeAction,
    TUpdateBlockAction,
} from '@/pages/Workspace/Block/types';
import {StorageKeys} from '@/services/types';

import {SliceNames} from '../types';
import {initialBlocks} from './constants';
import {TBlocksState} from './types';

const reducers = {
    updateBlock: (state: TBlocksState, action: PayloadAction<TUpdateBlockAction['payload']>) => {
        const currentBlocks = state.blocks;
        const {id, newProps} = action.payload;

        const updatedBlocks = currentBlocks.map(block => (block.id === id ? {...block, ...newProps} : block));

        state.blocks = updatedBlocks;
        localStorage.setItem(StorageKeys.blocks, JSON.stringify(updatedBlocks));
    },
    deleteBlock: (state: TBlocksState, action: PayloadAction<TDeleteBlockAction['payload']>) => {
        const currentBlocks = state.blocks;
        const updatedBlocks = currentBlocks.filter(block => block.id !== action.payload.id);

        state.blocks = updatedBlocks;

        if (updatedBlocks.length > 0) {
            localStorage.setItem(StorageKeys.blocks, JSON.stringify(updatedBlocks));
        } else {
            localStorage.removeItem(StorageKeys.blocks);
        }
    },
    bringToFront: (state: TBlocksState, action: PayloadAction<TBringToFrontAction['payload']>) => {
        const currentBlocks = state.blocks;
        const maxZIndex = Math.max(...currentBlocks.map(b => b.zIndex)) + 1;

        const updatedBlocks = currentBlocks.map(block =>
            block.id === action.payload.id ? {...block, zIndex: maxZIndex} : block,
        );

        state.blocks = updatedBlocks;
    },
    resetBlocks: (state: TBlocksState) => {
        state.blocks = initialBlocks;
        localStorage.removeItem(StorageKeys.blocks);
    },
    setBlocksContainerSize: (state: TBlocksState, action: PayloadAction<TSetBlocksContainerSizeAction['payload']>) => {
        state.blocksContainerSize = action.payload;
    },
};

const savedBlocks = localStorage.getItem(StorageKeys.blocks);

const initialState: TBlocksState = {
    blocks: savedBlocks ? JSON.parse(savedBlocks) : initialBlocks,
    blocksContainerSize: {width: 0, height: 0},
};

const blocksSlice = createSlice({
    name: SliceNames.blocksSlice,
    initialState,
    reducers,
});

export const {updateBlock, deleteBlock, bringToFront, resetBlocks, setBlocksContainerSize} = blocksSlice.actions;
export default blocksSlice;
