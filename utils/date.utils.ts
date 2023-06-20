export const getMonthName = (date: Date): string => {
    return date.toLocaleString('default', { month: 'long' });
}

export const getYear = (date: Date): number => {
    return date.getFullYear();
}
