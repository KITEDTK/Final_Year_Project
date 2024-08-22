import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from "axios";
import { StatisticalDateInput } from './statisticalType';

const BASE_URL = "http://localhost:4000/statistical";

export const fetchPaymentPrice = createAsyncThunk<number,StatisticalDateInput>(
    "statistical/payment",
    async({year, month})=>{
        try{
            const response: AxiosResponse<number>= await axios.post(`${BASE_URL}/paymentPrice`,
                {
                    year: year,
                    month: month
                },
                {headers: { "Content-Type": "application/json" },}
            );
            return response.data;
        }catch(err){
            console.error("fetching error", err);
            throw err;
        }
    }
);
export const fetchInitPrice = createAsyncThunk<number,StatisticalDateInput>(
    "statistical/init",
    async({year,month})=>{
        try{
            const response: AxiosResponse<number>= await axios.post(`${BASE_URL}/initProductPrice`,
                {
                    year: year,
                    month: month
                },
                {headers: { "Content-Type": "application/json" },}
            );
            return response.data;
        }catch(err){
            console.error("fetching error", err);
            throw err;
        }
    }
)
