import {Link} from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="flex items-center gap-3">
                <h1 className="text-7xl font-bold">404</h1>

                <div className="self-stretch my-2 border-t border-s border-gray-200 max-md:w-[40%] max-md:mx-auto"></div>

                <p className="text-3xl">PAGE NOT FOUND</p>
            </div>

            <Link to="/" className="mt-4 text-2xl transition-all hover:text-violet-400">
                Return home
            </Link>
        </div>
    );
};

export default NotFound;
