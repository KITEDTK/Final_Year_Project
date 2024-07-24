import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Create2HandPaymentInput } from "./secondhandPaymentType";

const BASE_URL = "http://localhost:4000/secondhandPayments";

export const fetchAdd2handPayment = createAsyncThunk<any, Create2HandPaymentInput>(
    "2hand/add-to-2handPayment",
    async({buyerId, address,buyerName, phoneNumber, price, status, secondhandCartIds})=>{
        try{
            const response: AxiosResponse<any> = await axios.post(
                `${BASE_URL}`,{
                    buyerId: buyerId,
                    address: address,
                    buyerName: buyerName,
                    phoneNumber: phoneNumber,
                    price: price,
                    status: status,
                    secondhandCartIds: secondhandCartIds
                },
                { headers: { "Content-Type": "application/json" } }
            );
            return response.data;
        }catch (err) {
            console.error("Thêm hóa đơn thất bại", err);
            throw err;
          }
    }
);
const secondhandPaymentSlice = createSlice({
    name: "secondHand",
    initialState: {
      loading: false,
      error: null,
    } as any,
    reducers: {},
});
export default secondhandPaymentSlice.reducer;