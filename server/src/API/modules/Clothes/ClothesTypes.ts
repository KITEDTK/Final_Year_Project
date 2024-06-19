export interface filterClothes {
  categoryId: string | null;
  sizeIds: Array<string>;
  colorIds: Array<string>;
  rootCategoryId: string | null;
}
export interface CreateClothesInput {
  name: string;
  brand: string;
  location: string;
  initPrice: number;
  price: number;
  categoryId: string;
  clothDetails: ClothDetails[];
}
export interface ClothDetails {
  colorId: string;
  sizeId: string;
  image1: string;
  image2: string;
  image3: string;
  barcode: string;
  amount: number;
}
