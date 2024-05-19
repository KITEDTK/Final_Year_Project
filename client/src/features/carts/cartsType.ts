export interface BaseCart{
    id: string;
    userId: string;
    clothDetailId: string;
    isCheckout: boolean;
    amount: number;
    clothDetails: {
        size:{
            name: string;
        },
        color:{
            name: string;
        },
        cloth:{
            name: string;
        }
    }
}
export interface AddItemInput{
    userId: string;
    clothDetailId: string;
}
export interface CartsState{
    carts: BaseCart[] | null;
    loading: boolean;
    error: string | null;
    localCarts : LocalCarts;
}
export interface UserId{
    userId: string;
}
export interface DeleteItemInput { 
    userId: string;
    cartId: string;
}
export interface LocalCarts{
    items: ItemInLocalCarts[];
    amount: number;
    totalPrice: number;
}
export interface ItemInLocalCarts{
    sizeName: string ;
    colorName: string;
    clothesName: string;
    clothDetailId: string;
    amount: number;
    price: number;
}