import {useState} from 'react';
import {useSelector} from 'react-redux';
import {DraggableData, Position, Rnd} from 'react-rnd';

import Button from '@/components/Button';
import {bringToFront, deleteBlock, updateBlock} from '@/redux/blocks/blocksSlice';
import {selectContainerSize} from '@/redux/blocks/selectors';
import {useAppDispatch} from '@/redux/store';
import {TBlockPositions} from '@/services/types';
import {convertToPercents, convertToPixels} from '@/services/utils';

import {TBlockProps} from './types';

const Block = ({block}: TBlockProps) => {
    const [isActive, setIsActive] = useState(false);

    const dispatch = useAppDispatch();
    const containerSize = useSelector(selectContainerSize);

    const pixelBlock = convertToPixels(block, containerSize);

    const onBringToFrontBlock = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('#delete-btn')) {
            return;
        }

        dispatch(bringToFront({id: block.id}));
    };

    const handleDeleteBLock = () => {
        dispatch(deleteBlock({id: block.id}));
    };

    const handleBlockUpdate = (newBlockData: TBlockPositions) => {
        dispatch(
            updateBlock({
                id: block.id,
                newProps: convertToPercents(newBlockData, containerSize),
            }),
        );
        setIsActive(false);
    };

    const handleDragStart = () => {
        setIsActive(true);
    };

    const handleResizeStart = () => {
        setIsActive(true);
        dispatch(bringToFront({id: block.id}));
    };

    const handleDragStop = (data: DraggableData) => {
        const newBlockData = {
            x: data.x,
            y: data.y,
            width: pixelBlock.width,
            height: pixelBlock.height,
        };

        handleBlockUpdate(newBlockData);
    };

    const handleResizeStop = (ref: HTMLElement, position: Position) => {
        const newBlockData = {
            width: parseInt(ref.style.width, 10),
            height: parseInt(ref.style.height, 10),
            x: position.x,
            y: position.y,
        };

        handleBlockUpdate(newBlockData);
    };

    return (
        <Rnd
            size={{width: pixelBlock.width, height: pixelBlock.height}}
            position={{x: pixelBlock.x, y: pixelBlock.y}}
            bounds="parent"
            dragGrid={[10, 10]} // Moving around the grid 10px
            resizeGrid={[10, 10]} // Resize multiples 10px
            onDragStart={handleDragStart}
            onResizeStart={handleResizeStart}
            onDragStop={(_, data) => handleDragStop(data)}
            onResizeStop={(_, __, ref, ___, position) => handleResizeStop(ref, position)}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: pixelBlock.zIndex,
            }}
            className={`absolute flex items-center justify-center cursor-pointer rounded-[5px] border-2 ${isActive ? 'border-violet-500' : 'border-white'} text-white bg-[#242424]`}
            onMouseDown={onBringToFrontBlock}>
            <span>Block {block.id}</span>

            <Button
                id="delete-btn"
                onClick={handleDeleteBLock}
                onTouchStart={handleDeleteBLock}
                className="absolute top-[5px] right-[5px] text-[12px] p-0 border-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            </Button>
        </Rnd>
    );
};

export default Block;
