import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import {
  ClothesFilter,
  Filter,
  ClothesState,
  SingleClothes,
  ClothDetails,
  CommentInput,
} from "./clothesTypes";

const BASE_URL = "http://localhost:4000/clothes";

export const fetchFilterClothes = createAsyncThunk<ClothesFilter[], Filter>(
  "cloths/filter",
  async ({ filter }) => {
    const response: AxiosResponse<ClothesFilter[]> = await axios.post(
      `${BASE_URL}/filter`,
      { ...filter },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  }
);
export const fetchSingleClothes = createAsyncThunk<SingleClothes, string>(
  "cloth/single",
  async (clothesId: string) => {
    try {
      const response: AxiosResponse<SingleClothes> = await axios.get(
        `${BASE_URL}/${clothesId}`,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("Thêm vào giỏ hàng thất bại", err);
      throw err;
    }
  }
);
export const fetchAddComment = createAsyncThunk<SingleClothes, CommentInput>(
  "cloth/comment",
  async ({clothesId, content, userId}) =>{
    try {
      const response: AxiosResponse<SingleClothes> = await axios.post(
        `${BASE_URL}/${clothesId}/users/${userId}/comments`,
        {content: content},
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("Thêm comment thất bại", err);
      throw err;
    }
  }
)
export const fetchAllClothDetails = createAsyncThunk<ClothDetails[]>(
  "clothDetails/all",
  async()=>{
    try {
      const response: AxiosResponse<ClothDetails[]> = await axios.get(
        `${BASE_URL}/clothDetails`,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("Thêm vào giỏ hàng thất bại", err);
      throw err;
    }
  }
)
const clothesSlice = createSlice({
  name: "clothes",
  initialState: {
    clothes: [],
    singleClothes: {} as SingleClothes,
    allClothDetails: [] as ClothDetails[],
    loading: false,
    error: null,
  } as ClothesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterClothes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilterClothes.fulfilled, (state, action) => {
        state.loading = false;
        state.clothes = action.payload;
      })
      .addCase(fetchFilterClothes.rejected, (state, action) => {
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
      .addCase(fetchAllClothDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllClothDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.allClothDetails = action.payload;
      })
      .addCase(fetchAllClothDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchAddComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddComment.fulfilled, (state, action) => {
        state.loading = false;
        state.singleClothes = action.payload;
      })
      .addCase(fetchAddComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
        console.log('Người dùng chưa mua mặt hàng này');
      })
      ;
  },
});
export default clothesSlice.reducer;
