import { LocalPaymentInfo } from "../payments/paymentsType";

export interface Create2HandPaymentInput{
    buyerId?: string;
    address: string;
    buyerName: string;
    price?: number;
    phoneNumber: string;
    status: string;
    secondhandCartIds: string[];
}
export interface SecondhandPaymentState {
    local2handPaymentInfo: LocalPaymentInfo;
    loading: false;
    error: string | null;
}