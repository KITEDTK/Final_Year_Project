

export interface PaymentsState{
    localPaymentInfo : LocalPaymentInfo
    paymentUrl: string;
    loading: boolean;
    error: string | null;
}
export interface PaymentInput{
    userId?: string;
    voucherId?: string;
    fullName: string;
    total: number;
    address: string;
    email: string;
    phoneNumber: string;
    clothDetailId: string[];
}
export interface PaymentVnpayOutput{
    url: string;
    data: number;
}
export interface LocalPaymentInfo{
    voucherId? : string;
    fullName: string;
    address: string;
    email: string;
    phoneNumber: string;
}