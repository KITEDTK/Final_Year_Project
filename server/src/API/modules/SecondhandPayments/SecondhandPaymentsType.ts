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