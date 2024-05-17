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
    loading: boolean,
    error: string | null
}
export interface UserId{
    userId: string;
}