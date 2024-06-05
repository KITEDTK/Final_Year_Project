import { Category } from "../categorires/categoriesTypes";
import { SingleComment } from "../comments/comments";

export interface ClothDetailsColorSize {
    id: string;
    sizeId: string;
    colorId: string;
    codeBar: string;
    clothId: string;
    amount: number;
    createAt: Date;
    updateAt: Date | null;
    isEnable: boolean;
    size: {
      name: string;
    };
    color: {
      name: string;
    };
  }
export interface ClothesFilter {
  id: string;
  name: string;
  categoryId: string;
  brand: string;
  location: string;
  createAt: Date;
  isEnable: boolean;
  clothDetails: ClothDetailsColorSize[];
  price: number;
}

export interface Filter {
  filter: {
    rootCategoryId: string;
    categoryId: string | null;
    sizeIds: string[];
    colorIds: string[];
  };
}
export interface ClothesState {
    clothes: ClothesFilter[];
    singleClothes: SingleClothes;
    allClothDetails: ClothDetails[];
    loading: boolean;
    error: string | null;
}
export interface SingleClothes {
  id: string;
  name: string;
  categoryId: string;
  brand: string;
  location: string;
  createAt: Date;
  isEnable: boolean;
  clothDetails: ClothDetailsColorSize[];
  price: number;
  comments: SingleComment[];
  category: Category;
}
export interface ClothDetails {
  id: string;
  sizeId: string;
  colorId: string;
  codeBar: string;
  clothId: string;
  amount: number;
}
