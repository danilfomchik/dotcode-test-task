import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router';

import './index.css';
import ReduxProvider from './redux/redux-provider';
import {router} from './routes/router';

createRoot(document.getElementById('root')!).render(
    <ReduxProvider>
        <RouterProvider router={router} />
    </ReduxProvider>,
);
