import { LocalPaymentInfo } from "../payments/paymentsType";

export interface Create2HandPaymentInput {
  buyerId?: string;
  address: string;
  buyerName: string;
  phoneNumber: string;
  status: string;
  secondhandCartInfo: {
    secondhandId: string;
    amount: number;
    price?: number;
  }[];
}
export interface SecondhandPaymentState {
  local2handPaymentInfo: LocalPaymentInfo;
  loading: false;
  error: string | null;
}
export interface Create2handGuestPaymentInput {
  buyerName: string;
  address: string;
  phoneNumber: string;
  status: string;
  price?: number;
  local2handCarts: {
    secondhandId: string;
    amount: number;
  }[];
}
export interface BeingOrderedItems {
  id: string;
  status: string;
  secondhandId: string;
  amount: number;
  price?: number;
  secondhandPayments: {
    id: string;
    buyerId: string;
    address: string;
    phoneNumer: string;
    buyerName: string;
  };
  secondhand: {
    price: number,
    wardrobe: {
      clothDetails: {
        image1: string,
        id: string;
        size: {
          name: string;
        };
        color: {
          name: string;
        };
        cloth: {
          name: string;
        };
      };
    };
  };
}
export interface UpdateStatus2hand {
  paymentDetailId: string;
  status: string;
}
export interface Odering2handItems {
  id: string;
  SecondhandPaymentDetails: {
    id: string;
    amount: number,
    status: string,
    secondhand: {
      price: number;
      wardrobe: {
        userId: string;
        clothDetails: {
          image1: string;
          cloth: {
            name: string;
          };
          color: {
            name: string;
          };
          size: {
            name: string;
          };
        };
      };
    };
  }[];
}