export interface Create2HandPaymentInput{
    buyerId?: string;
    address: string;
    buyerName: string;
    phoneNumber: string;
    status: string;
    secondhandCartInfo:{
        secondhandId: string;
        amount: number;
        price?: number;
    }[]
}
export interface Create2handGuestPaymentInput{
    buyerName: string;
    address: string;
    phoneNumber: string;
    status: string;
    price: number;
    local2handCarts: {
        secondhandId: string;
        price?: number;
        amount: number;
    }[]
}