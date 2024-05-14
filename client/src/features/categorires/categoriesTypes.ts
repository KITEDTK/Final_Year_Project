export interface Category {
    // Define the structure of a single category
    id: string;
    name: string;
    parentId: string | null;
    createAt: Date;
    isEnable: boolean;
    children: Category[]
    // Add other properties as needed
  }
  export interface BaseCategory {
    id: string;
    name: string;
    parentId: string | null;
    createAt: Date;
    isEnable: boolean;
  }
  export interface CategoriesState {
    categories: Category[];
    category: Category | null; // or {} if the initial value is an empty object
    childCategories: ChildCategories[] | null;
    rootChildCategory: BaseCategory;
    loading: boolean;
    error: string | null;
  }
  export interface ChildCategories {
    id: string;
    name: string;
    parentId: string | null;
    createAt: Date;
    isEnable: boolean;
    totalAmount: number;
  }
  export interface FetchSingleCategoriesPayload {
    categoryId: string;
  }