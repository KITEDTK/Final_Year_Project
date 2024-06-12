import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { Clothes, ClothesState,SingleClothes } from "./clothesType";

const BASE_URL = "http://localhost:4000/clothes/admin";

export const fetchAllClothes = createAsyncThunk<Clothes[], number>(
  "clothes/admin/get-all-clothes",
  async (page: number) => {
    try {
      const response: AxiosResponse<Clothes[]> = await axios.get(`${BASE_URL}?page=${page}`, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchSingleClothes = createAsyncThunk<SingleClothes, string>(
  "clothes/fetchSingleClothes",
  async (clothesId: string) => {
    try {
      const response: AxiosResponse<SingleClothes> = await axios.get(
        `http://localhost:4000/clothes/${clothesId}/admin`,
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
export const fetchMaxQuantityClothes = createAsyncThunk<number>(
  "clothes/maxQuantity",
  async()=>{
    try {
      const response: AxiosResponse<number> = await axios.get(
        `http://localhost:4000/clothes/admin/maxQuantity`,
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
)
const clothesSlice = createSlice({
  name: "clothes",
  initialState: {
    clothes: [],
    loading: false,
    singleClothes: {} as SingleClothes,
    maxClothesQuantity: 0 as number,
    error: null,
  } as ClothesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllClothes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllClothes.fulfilled, (state, action) => {
        state.loading = false;
        state.clothes = action.payload;
      })
      .addCase(fetchAllClothes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchSingleClothes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleClothes.fulfilled, (state, action) => {
        state.loading = false;
        state.singleClothes = action.payload;
      })
      .addCase(fetchSingleClothes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchMaxQuantityClothes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMaxQuantityClothes.fulfilled, (state, action) => {
        state.loading = false;
        state.maxClothesQuantity = action.payload;
      })
      .addCase(fetchMaxQuantityClothes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default clothesSlice.reducer;
