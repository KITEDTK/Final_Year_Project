import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  SecondHand,
  SecondHandAddInput,
  SellingSecondhandProducts,
} from "./secondHandTypes";

const BASE_URL = "http://localhost:4000/secondHand";

export const fetchAddSecondHand = createAsyncThunk<any, SecondHandAddInput>(
  "secondHand/add",
  async ({ wardrobeId, amount, price }) => {
    try {
      const response: AxiosResponse<any> = await axios.post(`${BASE_URL}`, {
        wardrobeId: wardrobeId,
        amount: amount,
        price: price
      });
      return response.data;
    } catch (err) {
      console.error("Bán lại sản phẩm thất bại", err);
      throw err;
    }
  }
);
export const fetchAllSecondHand = createAsyncThunk<SecondHand[], number>(
  "secondHand/all",
  async (page: number) => {
    try {
      const response: AxiosResponse<SecondHand[]> = await axios.get(
        `${BASE_URL}/${page}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Bán lại sản phẩm thất bại", err);
      throw err;
    }
  }
);
export const fetchMaxQuantity = createAsyncThunk<number>(
  "seconHand/maxQuantity",
  async () => {
    try {
      const response: AxiosResponse<number> = await axios.get(`${BASE_URL}`, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      console.error("Bán lại sản phẩm thất bại", err);
      throw err;
    }
  }
);
export const fetchSellingItems = createAsyncThunk<
  SellingSecondhandProducts[],
  string
>("secondHand/selling-items", async (userId) => {
  try {
    const response: AxiosResponse<SellingSecondhandProducts[]> =
      await axios.get(`${BASE_URL}/users/${userId}/sellingItems`, {
        headers: { "Content-Type": "application/json" },
      });
    return response.data;
  } catch (err) {
    console.error("loi", err);
    throw err;
  }
});
export const fetchAllItemsSecondhand = createAsyncThunk<SecondHand[]>(
  "all",
  async () => {
    try {
      const response: AxiosResponse<SecondHand[]> = await axios.get(
        `${BASE_URL}/getAll/secondhandItems`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Bán lại sản phẩm thất bại", err);
      throw err;
    }
  }
);
export const fetchPullItems = createAsyncThunk<any, string>(
  "secondhand/pullingitems",
  async (secondhandId) => {
    try {
      const response: AxiosResponse<SellingSecondhandProducts[]> =
        await axios.delete(`${BASE_URL}/${secondhandId}`, {
          headers: { "Content-Type": "application/json" },
        });
      return response.data;
    } catch (err) {
      console.error("loi", err);
      throw err;
    }
  }
);
const secondHandSlice = createSlice({
  name: "secondHand",
  initialState: {
    loading: false,
    error: null,
  } as any,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddSecondHand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddSecondHand.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchAddSecondHand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});
export default secondHandSlice.reducer;
