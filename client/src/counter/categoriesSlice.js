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
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (buidler) => {
    buidler.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.loading = true;
      state.categories = action.payload;
    });
  },
});
export default categoriesSlice.reducer;
