export interface CategoriesModal {
    id: string;
    name: string;
    parentId: string;
}
export interface CategoriesState {
    categories: string[];
    categoriesModal: CategoriesModal[];
    loading: boolean;
    error: string| null;
}