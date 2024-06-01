

export interface PaymentsState{
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
}