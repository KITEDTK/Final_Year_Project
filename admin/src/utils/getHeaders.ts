export const getHeaders = <T extends object>(data: T[]): (keyof T)[] => {
    if (data.length === 0) return [];
    return Object.keys(data[0]) as (keyof T)[];
};