export interface SecondhandCartState {
  secondhandCarts: SecondhandCart[];
  loading: boolean;
  error: string | null;
  local2handCarts: Local2handCarts;
}
export interface SecondhandCart {
  id: string;
  userId: string;
  amount: number;
  seconHands: {
    id: string;
    price: number;
    wardrobe: {
      userId: string,
      clothDetails: {
        image1: string,
        size: {
          id: string;
          name: string;
        };
        color: {
          id: string;
          name: string;
        };
        cloth: {
          name: string;
          price: string;
        };
      };
    };
  };
}
export interface Local2handCarts {
  items: BaseLocal2handCart[];
  totalAmount: number;
  totalPrice: number;
}
export interface BaseLocal2handCart {
  secondhandId: string;
  amount: number;
  size: string;
  color: string;
  clothName: string;
}

