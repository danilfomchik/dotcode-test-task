import {TBlock, TBlockPositions, TBlockSizes} from './types';

export const convertToPercents = (newBlockData: TBlockPositions, containerSize: TBlockSizes) => {
    return {
        x: (newBlockData.x / containerSize.width) * 100,
        y: (newBlockData.y / containerSize.height) * 100,
        width: (newBlockData.width / containerSize.width) * 100,
        height: (newBlockData.height / containerSize.height) * 100,
    };
};

export const convertToPixels = (block: TBlock, containerSize: TBlockSizes) => ({
    ...block,
    x: (block.x / 100) * containerSize.width,
    y: (block.y / 100) * containerSize.height,
    width: (block.width / 100) * containerSize.width,
    height: (block.height / 100) * containerSize.height,
});
