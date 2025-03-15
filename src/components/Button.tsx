import {PropsWithChildren} from 'react';

const Button = ({children}: PropsWithChildren) => {
    return (
        <button className="border rounded-[8px] py-2.5 px-5 font-medium cursor-pointer transition-all hover:text-violet-500 hover:border-violet-500">
            {children}
        </button>
    );
};

export default Button;
