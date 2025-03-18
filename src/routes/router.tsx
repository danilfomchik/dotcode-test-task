import {lazy} from 'react';
import {createBrowserRouter} from 'react-router';

import Error from '@/components/Error';
import MainLayout from '@/layouts/MainLayout';
import NotFound from '@/pages/NotFound';
import {RouterPaths} from '@/services/types';

const Transactions = lazy(() => import('@/pages/Transactions/index'));
const Workspace = lazy(() => import('@/pages/Workspace/index'));

export const router = createBrowserRouter([
    {
        path: RouterPaths.home,
        element: <MainLayout />,
        children: [
            {index: true, element: <Workspace />, errorElement: <Error />},
            {path: RouterPaths.transactions, element: <Transactions />, errorElement: <Error />},
        ],
    },
    {
        path: RouterPaths.notFound,
        element: <NotFound />,
    },
]);
