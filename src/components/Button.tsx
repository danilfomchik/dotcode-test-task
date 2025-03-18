import {ButtonHTMLAttributes, memo} from 'react';
import {twMerge} from 'tailwind-merge';

const Button = ({children, className, ...restProps}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const classes = twMerge(
        `border rounded-[8px] py-2.5 px-5 font-medium cursor-pointer transition-all hover:text-violet-500 hover:border-violet-500 disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-auto ${className ?? ''}`,
    );

    return (
        <button className={classes} {...restProps}>
            {children}
        </button>
    );
};

export default memo(Button);
