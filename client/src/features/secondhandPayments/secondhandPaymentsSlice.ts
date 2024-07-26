import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  Create2handGuestPaymentInput,
  Create2HandPaymentInput,
  SecondhandPaymentState,
} from "./secondhandPaymentType";
import { LocalPaymentInfo } from "../payments/paymentsType";

const BASE_URL = "http://localhost:4000/secondhandPayments";

export const fetchAdd2handPayment = createAsyncThunk<
  any,
  Create2HandPaymentInput
>(
  "2hand/add-to-2handPayment",
  async ({
    buyerId,
    address,
    buyerName,
    phoneNumber,
    price,
    status,
    secondhandCartIds,
  }) => {
    try {
      const response: AxiosResponse<any> = await axios.post(
        `${BASE_URL}`,
        {
          buyerId: buyerId,
          address: address,
          buyerName: buyerName,
          phoneNumber: phoneNumber,
          price: price,
          status: status,
          secondhandCartIds: secondhandCartIds,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("Thêm hóa đơn thất bại", err);
      throw err;
    }
  }
);
export const fetchAddLocal2handPayment = createAsyncThunk<any, Create2handGuestPaymentInput>(
  "secondhand/guest/add",
  async({address,buyerName, phoneNumber, price, status, local2handCarts })=>{
    try{
      const response: AxiosResponse<any> = await axios.post(`${BASE_URL}/guest`,
        {
          address: address,
          buyerName: buyerName,
          phoneNumber: phoneNumber,
          status: status,
          price: price,
          local2handCarts: local2handCarts
        }
      );
      return response.data;
    }catch (err) {
      console.error("Thêm hóa đơn thất bại", err);
      throw err;
    }
  }
)
const secondhandPaymentSlice = createSlice({
  name: "secondHandPayment",
  initialState: {
    local2handPaymentInfo: {} as LocalPaymentInfo,
    loading: false,
    error: null,
  } as SecondhandPaymentState,
  reducers: {
    updateLocal2handPayment: (
      state,
      action: PayloadAction<LocalPaymentInfo>
    ) => {
      state.local2handPaymentInfo = action.payload;
    },
  },
});
export const { updateLocal2handPayment } = secondhandPaymentSlice.actions;
export default secondhandPaymentSlice.reducer;