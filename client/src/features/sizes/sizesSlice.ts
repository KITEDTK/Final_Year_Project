import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Sizes, SizesState } from "./sizesTypes";

const BASE_URL = "http://localhost:4000/sizes";

export const fetchAllSizes = createAsyncThunk<Sizes[]>(
  "sizes/get-all-sizes",
  async () => {
    try {
      const response: AxiosResponse<Sizes[]> = await axios.get(`${BASE_URL}`, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
const sizesSlice = createSlice({
  name: "sizes",
  initialState: {
    sizes: [],
    loading: false,
    error: null,
  } as SizesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSizes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllSizes.fulfilled, (state, action) => {
        state.loading = false;
        state.sizes = action.payload;
      })
      .addCase(fetchAllSizes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});
export default sizesSlice.reducer;
