import {useCallback, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';

import {setBlocksContainerSize} from '@/redux/blocks/blocksSlice';
import {selectBlocks} from '@/redux/blocks/selectors';
import {useAppDispatch} from '@/redux/store';

import Block from '../Block';

const BlocksBoard = () => {
    const dispatch = useAppDispatch();
    const blocks = useSelector(selectBlocks);
    const workspaceRef = useRef<HTMLDivElement>(null);

    const updateContainerSize = useCallback(() => {
        if (workspaceRef.current) {
            const rect = workspaceRef.current.getBoundingClientRect();
            dispatch(
                setBlocksContainerSize({
                    width: rect.width,
                    height: rect.height,
                }),
            );
        }
    }, [dispatch]);

    // check the screen dimensions to make the blocks responsive
    useEffect(() => {
        const observer = new ResizeObserver(updateContainerSize);
        if (workspaceRef.current) observer.observe(workspaceRef.current);

        return () => observer.disconnect();
    }, [updateContainerSize]);

    return (
        <div ref={workspaceRef} className="relative w-full h-screen overflow-hidden p-5 mt-5">
            {blocks.map(block => (
                <Block key={block.id} block={block} />
            ))}
        </div>
    );
};

export default BlocksBoard;
