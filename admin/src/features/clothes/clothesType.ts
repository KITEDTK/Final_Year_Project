export interface Clothes{
    name: string;
    brand: string;
    location: string| null;
    categoryName: string;
    price: number;
}
export interface ClothesState{
    clothes: Clothes[];
    loading: boolean;
    error: string | null;
}