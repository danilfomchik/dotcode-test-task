import {Suspense} from 'react';
import {Outlet} from 'react-router';

import Container from '@/components/Container';
import Header from '@/components/Header';
import Loading from '@/components/Loading';

const MainLayout = () => {
    return (
        <Container>
            <Header />
            <main>
                <div className="pt-10">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
        </Container>
    );
};

export default MainLayout;
