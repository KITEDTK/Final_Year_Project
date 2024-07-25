export interface Create2HandPaymentInput{
    buyerId?: string;
    sellerId: string;
    address: string;
    buyerName: string;
    price: number;
    phoneNumber: string;
    status: string;
    secondhandCartIds: string[];
}
export interface Create2handGuestPaymentInput{
    buyerName: string;
    address: string;
    phoneNumber: string;
    status: string;
    price: number;
    local2handCarts: {
        secondhandId: string;
        amount: number;
    }[]
}