import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { PaymentsState} from './paymentsType';
import { PaymentInput, LocalPaymentInfo} from "./paymentsType";

const BASE_URL = "http://localhost:4000/payments";

export const fetchPaybyVNPAY = createAsyncThunk<string, PaymentInput>(
  "payments/vn_pay",
  async ({userId,voucherId,total, address, email, phoneNumber, fullName, clothDetailId}) => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${BASE_URL}/vnpay`,
        { 
          userId: userId,
          voucherId: voucherId,
          total: total,
          address: address,
          email: email,
          phoneNumber: phoneNumber,
          fullname: fullName,
          clothDetailId: clothDetailId
        },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("Thêm vào giỏ hàng thất bại", err);
      throw err;
    }
  }
);
const paymentsSlice = createSlice({
  name: "payments",
  initialState: {
    paymentUrl: '',
    localPaymentInfo: {} as LocalPaymentInfo,
    loading: false,
    error: null,
  } as PaymentsState,
  reducers: {
    updateLocalPaymentInfo: (state, action: PayloadAction<LocalPaymentInfo>)=>{
      state.localPaymentInfo = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaybyVNPAY.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPaybyVNPAY.fulfilled, (state, action) => {
        state.loading = false;
        window.location.href = action.payload;
      })
      .addCase(fetchPaybyVNPAY.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});
export const {updateLocalPaymentInfo} = paymentsSlice.actions;
export default paymentsSlice.reducer;
