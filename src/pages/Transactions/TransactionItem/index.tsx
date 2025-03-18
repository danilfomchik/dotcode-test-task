import {getTransactionsSum} from '@/services/utils';

import {TTransactionItemProps} from './types';

const TransactionsItem = ({transaction}: TTransactionItemProps) => {
    return (
        <div className="flex gap-8 pb-8 w-full max-md:gap-4 max-sm:flex-col">
            <div className="flex-1 min-w-0 divide-y-2">
                <h3 className="text-xl font-bold w-fit pb-2 mb-3">From</h3>
                <div className="flex flex-col gap-1.5 overflow-hidden">
                    {transaction.inputs.map((input, i) => (
                        <span key={`${input.prev_out.addr}-${i}`} className="text-ellipsis overflow-hidden">
                            {input.prev_out.addr}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex-1 min-w-0 divide-y-2">
                <h3 className="text-xl font-bold w-fit pb-2 mb-3">To</h3>
                <div className="flex flex-col gap-1.5 overflow-hidden">
                    {transaction.out.map((output, i) => (
                        <span key={`${output.addr}-${i}`} className="text-ellipsis overflow-hidden">
                            {output.addr}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex-1 min-w-0 divide-y-2">
                <h3 className="text-xl font-bold w-fit pb-2 mb-3">Sum</h3>
                <span>{getTransactionsSum(transaction)} BTC</span>
            </div>
        </div>
    );
};

export default TransactionsItem;
