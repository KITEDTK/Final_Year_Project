export interface Payment {
    id: string;
    userId: string | null;
    voucherId: string | null;
    total: number;
    isPaid: boolean;
    address: string;
    onlinePay: boolean;
    vnpay: boolean;
    email: string;
    fullname: string;
    phoneNumber: string;
    status: string;
}
export interface PaymentInput {
    page: number;
    payType: string;
}
export interface PaymentState { 
    payments : Payment[];
    maxQuantity: number;
    loading: boolean;
    error: string | null;
}

export interface PaymentDetail {
    id: string;
    amount: number;
    clothDetail: {
        codeBar: string;
        amount: number;
        cloth:{
            name: string
        };
        color:{
            name: string
        },
        size:{
            name: string;
        }
    }
}
export interface PaymentStatusInput{
    paymentId: string;
    status: string;
}