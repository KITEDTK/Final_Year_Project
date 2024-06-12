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
    loading: boolean;
    error: string | null;
}
export interface SingleClothes{
    name: string;
    brand: string;
    location: string;
    category: {
        name: string;
    }
    clothDetails: ClothDetails[];
    initPrice: string;
    price: string;
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