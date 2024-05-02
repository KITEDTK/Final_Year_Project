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
}

export interface Filter {
  filter: {
    categoryId: string;
    sizeIds: string[];
    colorIds: string[];
  };
}
export interface ClothesState {
    clothes: ClothesFilter[];
    loading: boolean;
    error: string | null;
}
