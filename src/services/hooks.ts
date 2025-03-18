import {useContext} from 'react';

import {WebsocketContext} from '@/context/websocket-context';

export const useWebSocketContext = () => {
    const context = useContext(WebsocketContext);

    if (!context) {
        throw new Error('useWebSocketContext must be used within a WebsocketProvider');
    }
    return context;
};
