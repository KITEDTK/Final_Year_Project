export interface Sizes {
    id: string,
    name: string,
    createAt: Date,
    updateAt: Date | null,
    isEnable: boolean
}
export interface SizesState{
    sizes: Sizes[];
    loading: boolean;
    error: string | null;
}