import { Category } from "../categorires/categoriesTypes";
import { SingleComment } from "../comments/commentsTypes";

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
  rootCategoryId: string;
  page?: number;
}
export interface ClothesState {
    clothes: ClothesFilter[];
    singleClothes: SingleClothes;
    allClothDetails: ClothDetails[];
    maxQuantityByCategory: number;
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
export interface CommentInput {
  userId: string;
  content: string;
  clothesId: string;
}

export interface CLothesSearching {
  id: string;
  name: string;
  price: number;
}
