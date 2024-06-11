import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { CategoriesModal, CategoriesState } from "./categoriesTypes";

const BASE_URL = "http://localhost:4000/categories";

export const fetchModalCategories = createAsyncThunk<CategoriesModal[]>(
  "categories/modal",
  async () => {
    try {
      const response: AxiosResponse<CategoriesModal[]> = await axios.get(
        `${BASE_URL}/modal`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
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
    loading: false,
    categoriesModal: [] as CategoriesModal[],
    error: null,
  } as CategoriesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModalCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchModalCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesModal = action.payload;
      })
      .addCase(fetchModalCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default categoriesSlice.reducer;
