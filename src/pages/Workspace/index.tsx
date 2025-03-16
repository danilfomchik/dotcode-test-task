import Button from '@/components/Button';
import {resetBlocks} from '@/redux/blocks/blocksSlice';
import {useAppDispatch} from '@/redux/store';

import BlocksBoard from './BlocksBoard';

const Workspace = () => {
    const dispatch = useAppDispatch();

    const onResetBlocks = () => {
        dispatch(resetBlocks());
    };

    return (
        <div>
            <Button onClick={onResetBlocks}>Reset board</Button>

            <BlocksBoard />
        </div>
    );
};

export default Workspace;
