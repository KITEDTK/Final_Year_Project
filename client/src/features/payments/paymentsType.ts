export interface PaymentsState {
  localPaymentInfo: LocalPaymentInfo;
  paymentUrl: string;
  loading: boolean;
  error: string | null;
}
export interface PaymentInput {
  userId?: string;
  voucherId?: string;
  fullName: string;
  total: number;
  address: string;
  email: string;
  phoneNumber: string;
  clothDetail: {
    id: string;
    amount: number;
  }[];
}
export interface PaymentVnpayOutput {
  url: string;
  data: number;
}
export interface LocalPaymentInfo {
  voucherId?: string;
  fullName: string;
  address: string;
  email: string;
  phoneNumber: string;
}
export interface PaymentHistory {
  id: string;
  status: string;
  paymentDetails: {
    id: string,
    amount: number,
    clothDetail: {
      cloth: {
        name: string,
        price: number
      },
      size: {
        name: string;
      },
      color:{
        name: string;
      }
    }
  }[]
}
