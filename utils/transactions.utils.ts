import { ITransaction } from 'types';
import { getMonthName, getYear } from 'utils/date.utils';

export const getTransactionsByMonth = (transactions: ITransaction[], date: Date): ITransaction[] => {
    const monthName = getMonthName(date);

    return transactions.filter(({ date: transactionDate }) => (
        getMonthName(transactionDate) === monthName
    ));
}

export const getTransactionsByYear = (transactions: ITransaction[], date: Date): ITransaction[] => {
    const year = getYear(date);

    return transactions.filter(({ date: transactionDate }) => (
        transactionDate.getFullYear() === year
    ));
}
