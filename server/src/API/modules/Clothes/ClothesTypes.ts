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
  image1: File;
  image2: File;
  image3: File;
  barcode: string;
  amount: number;
}
