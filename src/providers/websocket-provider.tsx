import {useDispatch} from 'react-redux';
import useWebSocket from 'react-use-websocket';

import {WebsocketContext} from '@/context/websocket-context';
import {TTransaction} from '@/pages/Transactions/types';
import {setWsStatusMessage} from '@/redux/transactions/transactionsSlice';
import {WS_URL} from '@/services/constants';

const WebsocketProvider = ({children}: {children: React.ReactNode}) => {
    const dispatch = useDispatch();
    const {sendJsonMessage, lastJsonMessage, readyState} = useWebSocket<TTransaction>(WS_URL, {
        share: true,
        shouldReconnect: () => true,
        reconnectAttempts: 10,
        reconnectInterval: 5000,
        onOpen() {
            dispatch(setWsStatusMessage(''));
        },
        onClose() {
            dispatch(setWsStatusMessage('Connection closed. Reconnecting...'));
        },
        onError() {
            dispatch(setWsStatusMessage('Something went wrong. Try again later...'));
        },
    });

    return (
        <WebsocketContext.Provider value={{sendJsonMessage, lastJsonMessage, readyState}}>
            {children}
        </WebsocketContext.Provider>
    );
};

export default WebsocketProvider;
