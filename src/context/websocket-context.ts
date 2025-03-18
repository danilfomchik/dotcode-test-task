import {createContext} from 'react';

import {TTransaction} from '@/pages/Transactions/types';

type WebSocketContextType = {
    sendJsonMessage: ({op}: {op: string}) => void;
    readyState: number;
    lastJsonMessage: TTransaction;
};

export const WebsocketContext = createContext<WebSocketContextType | undefined>(undefined);
