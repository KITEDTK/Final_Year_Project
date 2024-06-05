export interface BaseCart {
  id: string;
  userId: string;
  clothDetailId: string;
  isCheckout: boolean;
  amount: number;
  clothDetails: {
    size: {
      name: string;
    };
    color: {
      name: string;
    };
    cloth: {
      name: string;
      price: number;
    };
  };
}
export interface AddItemInput {
  userId: string;
  clothDetailId: string;
  amount: number;
}
export interface CartsState {
  carts: BaseCart[];
  loading: boolean;
  error: string | null;
  localCarts: LocalCarts;
}
export interface UserId {
  userId: string;
}
export interface DeleteItemInput {
  userId: string;
  cartId: string;
}
export interface LocalCarts {
  items: ItemInLocalCarts[];
  totalAmount: number;
  totalPrice: number;
}
export interface ItemInLocalCarts {
  sizeName: string;
  colorName: string;
  clothesName: string;
  clothDetailId: string;
  amount: number;
  price: number;
}
export interface updateItemInLocalCartInput {
  clothDetailId: string;
  amount: number;
}
export interface UpdateItemQuantityAuthCartInput {
  cartId: string;
  amount: number;
}
