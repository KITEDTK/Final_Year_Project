import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { StatisticalDateInput, StatisticalThisMonthOutput } from "./statisticalType";

const BASE_URL = "http://localhost:4000/statistical";

export const fetchPaymentPrice = createAsyncThunk<number, StatisticalDateInput>(
  "statistical/payment",
  async ({ year, month }) => {
    try {
      const response: AxiosResponse<number> = await axios.post(
        `${BASE_URL}/paymentPrice`,
        {
          year: year,
          month: month,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchInitPrice = createAsyncThunk<number, StatisticalDateInput>(
  "statistical/init",
  async ({ year, month }) => {
    try {
      const response: AxiosResponse<number> = await axios.post(
        `${BASE_URL}/initProductPrice`,
        {
          year: year,
          month: month,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchTopTenClothesMonth = createAsyncThunk<StatisticalThisMonthOutput[]>(
    "statistical/fetchTopTenClothesMonth",
    async () => {
      try {
        const response: AxiosResponse<StatisticalThisMonthOutput[]> = await axios.get(
          `${BASE_URL}/clothes/topten/month`,
          { headers: { "Content-Type": "application/json" } }
        );
        return response.data; 
      } catch (err) {
        console.error("fetching error", err);
        throw err;
      }
    }
  );
  
