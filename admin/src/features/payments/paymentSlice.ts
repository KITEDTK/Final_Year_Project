import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  Payment,
  PaymentDetail,
  PaymentInput,
  PaymentState,
  PaymentStatusInput,
} from "./paymentTypes";

const BASE_URL = "http://localhost:4000/payments";

export const fetchAllPayments = createAsyncThunk<Payment[], PaymentInput>(
  "payment/get-all",
  async ({ page, payType }) => {
    try {
      const response: AxiosResponse<Payment[]> = await axios.get(
        `${BASE_URL}/${payType}/page/${page}`,
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
export const fetchQuantityPayment = createAsyncThunk<number, string>(
  "payment/max-quantity",
  async (payType: string) => {
    try {
      const response: AxiosResponse<number> = await axios.get(
        `${BASE_URL}/${payType}/quantity`,
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
export const fetchPaymentDetails = createAsyncThunk<PaymentDetail[], string>(
  "payment/paymentDetail",
  async (paymentId: string) => {
    try {
      const response: AxiosResponse<PaymentDetail[]> = await axios.get(
        `${BASE_URL}/${paymentId}/paymentDetails`,
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
export const fetchUpdatePaymentStatus = createAsyncThunk<
  any,
  PaymentStatusInput
>("payment/update-status", async ({ paymentId, status }) => {
  try {
    const response: AxiosResponse<any> = await axios.patch(
      `${BASE_URL}/${paymentId}/status`,
      {
        status: status,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (err) {
    console.error("fetching error", err);
    throw err;
  }
});
export const fetchSinglePayment = createAsyncThunk<Payment, string>(
  "payment/single",
  async(paymentId: string)=>{
    try{
      const response: AxiosResponse<Payment> = await axios.get(`${BASE_URL}/${paymentId}/single`,{
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    }catch(err){
      console.error("fetching error", err);
      throw err;
    }
  }
)
export const fetchDeletePaymentDetail = createAsyncThunk<any, string>(
  "payment/delete",
  async(paymentDetaildId: string)=>{
    try{
      const response: AxiosResponse<any> = await axios.delete(`${BASE_URL}/paymentDetails/${paymentDetaildId}`,{
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    }catch(err){
      console.error("fetching error", err);
      throw err;
    }
  }
)
const paymentsSlice = createSlice({
  name: "payments",
  initialState: {
    payments: [],
    maxQuantity: 0,
    loading: false,
    error: null,
  } as PaymentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPayments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(fetchAllPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchQuantityPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuantityPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.maxQuantity = action.payload;
      })
      .addCase(fetchQuantityPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchPaymentDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPaymentDetails.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchPaymentDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchUpdatePaymentStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUpdatePaymentStatus.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchUpdatePaymentStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default paymentsSlice.reducer;
