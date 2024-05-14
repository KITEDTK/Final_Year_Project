import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Category, CategoriesState,FetchSingleCategoriesPayload, BaseCategory, ChildCategories } from "./categoriesTypes";

const BASE_URL = "http://localhost:4000/categories";

export const fetchAllCategories = createAsyncThunk<Category[]>(
  "categories/get-all-categories",
  async () => {
    try {
      const response: AxiosResponse<Category[]> = await axios.get(BASE_URL, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchSingleCategories = createAsyncThunk<Category, FetchSingleCategoriesPayload>(
  "categories/get-single-categories",
  async ({ categoryId }) => {
    try {
      const response: AxiosResponse<Category> = await axios.get(`${BASE_URL}/${categoryId}`, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchChildCategory = createAsyncThunk<ChildCategories[], FetchSingleCategoriesPayload>(
  "categories/child",
  async ({categoryId}) =>{
    try {
      const response: AxiosResponse<ChildCategories[]> = await axios.get(`${BASE_URL}/${categoryId}/child`, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
)
export const fetchChildRootCategory = createAsyncThunk<BaseCategory, FetchSingleCategoriesPayload>(
  "categories/get-single-categories/root-child",
  async ({ categoryId }) => {
    try {
      const response: AxiosResponse<BaseCategory> = await axios.get(`${BASE_URL}/${categoryId}`, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    category: null,
    childCategories: [],
    rootChildCategory: {} as BaseCategory,
    loading: false,
    error: null,
  } as CategoriesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchChildRootCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchChildRootCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.rootChildCategory = action.payload;
    })
    .addCase(fetchChildRootCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Unknown error";
    })

      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })

      .addCase(fetchSingleCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(fetchSingleCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      
      .addCase(fetchChildCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChildCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.childCategories = action.payload;
      })
      .addCase(fetchChildCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      ;
  },
});
export default categoriesSlice.reducer;
