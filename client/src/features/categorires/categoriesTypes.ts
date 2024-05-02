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
  
  export interface CategoriesState {
    categories: Category[];
    category: Category | null; // or {} if the initial value is an empty object
    loading: boolean;
    error: string | null;
  }
  export interface FetchSingleCategoriesPayload {
    categoryId: string;
  }