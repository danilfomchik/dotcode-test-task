import {NavLink} from 'react-router';

import {RouterPaths} from '@/services/types';

const setActive = ({isActive}: {isActive: boolean}) =>
    isActive
        ? 'border rounded-3xl border-violet-300 py-3 px-8 text-violet-300 transition-all'
        : 'border rounded-3xl py-3 px-8 transition-all hover:text-violet-300 hover:border-violet-300';

const Header = () => {
    return (
        <header>
            <nav className="flex justify-end max-md:justify-center gap-4 py-2.5">
                <NavLink to={RouterPaths.home} className={setActive}>
                    Task 1
                </NavLink>
                <NavLink to={RouterPaths.transactions} className={setActive}>
                    Task 2
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
