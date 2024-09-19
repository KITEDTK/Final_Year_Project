export interface Clothes {
  id: string;
  name: string;
  brand: string;
  location: string | null;
  categoryName: string;
  price: number;
  initPrice: number;
}
export interface ClothesState {
  clothes: Clothes[];
  singleClothes: SingleClothes;
  maxClothesQuantity: number;
  barcode: string;
  loading: boolean;
  error: string | null;
}
export interface SingleClothes {
  id: string;
  name: string;
  brand: string;
  location: string;
  category: {
    id: string;
    name: string;
  };
  clothDetails: ClothDetails[];
  initPrice: string;
  price: number;
}
export interface ClothDetails {
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
export interface PaginateInput {
  clothesId: string;
  page: number;
}
export interface UpdateClothesInput {
  clothesId: string;
  name?: string;
  categoryId?: string;
  brand?: string;
  location?: string;
  price?: number;
}
export interface GenerateBarcodeInput {
  oldBarcode?: string[];
}
export interface CreateClothesInput {
  name: string;
  brand: string;
  location: string;
  initPrice: number;
  price: number;
  categoryId: string;
}
export interface CreateClothDetailsInput {
  colorId: string;
  sizeId: string;
  image1: File | null;
  image2: File | null;
  image3: File | null;
  barcode: string;
  amount: number;
}
export interface ClothDetailsUpdateInput {
  clothDetailId: string;
  quantity: number;
}
export interface ClothByBarcode{
  id: string;
  image1: string;
  size:{
    name: string;
  };
  color:{
    name: string;
  };
  cloth:{
    name: string;
  }
}
export interface RefundInput {
  clothDetailId: string;
  amount: number;
}
export interface SearchingClothes{
  id: string;
  brand: string;
  category:{
    name: string
  }
  location: string;
  initPrice: number;
  price: number;
  name: string;
}