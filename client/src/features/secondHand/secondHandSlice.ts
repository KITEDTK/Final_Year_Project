import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { SecondHandAddInput } from "./secondHandTypes";

const BASE_URL = "http://localhost:4000/secondHand";

export const fetchAddSecondHand = createAsyncThunk<any, SecondHandAddInput>(
  "secondHand/add",
  async ({ paymentDetailId, amount }) => {
    try {
      const response: AxiosResponse<any> = await axios.post(`${BASE_URL}`, {
        paymentDetailId: paymentDetailId,
        amount: amount,
      });
      return response.data;
    } catch (err) {
      console.error("Bán lại sản phẩm thất bại", err);
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
