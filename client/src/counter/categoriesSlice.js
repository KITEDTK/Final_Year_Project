import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:4000/categories";

export const fetchAllCategories = createAsyncThunk(
  "categories/get-all-categories",
  async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/get-all-categories`,
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.log("fetching error");
    }
  }
);
export const fetchSingleCategories = createAsyncThunk(
  "categories/get-single-categories",
  async ({ categoryId }) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/${categoryId}`,
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.log("fetching error");
    }
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    category: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (buidler) => {
    buidler.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.loading = true;
      state.categories = action.payload;
    })
    .addCase(fetchSingleCategories.fulfilled, (state,action)=>{
      state.loading = true;
      state.category = action.payload;
    });
  },
});
export default categoriesSlice.reducer;
