export const formatMoney = (price: number): string => {
    return new Intl.NumberFormat('vi-VN').format(price);
};