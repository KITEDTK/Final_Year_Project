export interface Clothes{
    id: string;
    name: string;
    brand: string;
    location: string| null;
    categoryName: string;
    price: number;
    initPrice: number;
}
export interface ClothesState{
    clothes: Clothes[];
    singleClothes: SingleClothes;
    maxClothesQuantity: number;
    loading: boolean;
    error: string | null;
}
export interface SingleClothes{
    id: string;
    name: string;
    brand: string;
    location: string;
    category: {
        id: string;
        name: string;
    }
    clothDetails: ClothDetails[];
    initPrice: string;
    price: number;
}
export interface ClothDetails{
    id: string;
    codeBar: string;
    amount: number;
    size: {
        name: string;
    };
    color: {
        name: string;
    };
    sumOrderAmount: number;
}
export interface PaginateInput{
    clothesId: string;
    page: number;
}
export interface UpdateClothesInput{
    clothesId: string;
    name?: string;
    categoryId?: string;
    brand?: string;
    location?: string;
    price?: number;
}