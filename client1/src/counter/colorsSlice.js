import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = `http://localhost:4000/colors`;

export const getAllColors = createAsyncThunk(
  "colors/get-all-colors",
  async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/get-all-colors`,
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch all colors, error: ", err);
    }
  }
);
export const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    colors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllColors.fulfilled, (state, action) => {
      state.loading = false;
      state.colors = action.payload;
    });
  },
});
export default colorsSlice.reducer;
