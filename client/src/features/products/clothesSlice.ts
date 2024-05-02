import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { ClothesFilter, Filter, ClothesState } from "./clothesTypes";

const BASE_URL = "http://localhost:4000/clothes";

export const fetchFilterClothes = createAsyncThunk<ClothesFilter[], Filter>(
    "cloths/filter",
    async ({filter})=>{
        try {
            const response: AxiosResponse<ClothesFilter[]> = await axios.post(`${BASE_URL}/filter`, {
              headers: { "Content-Type": "application/json" },
              data: JSON.stringify(filter),
            });
            return response.data;
          } catch (err) {
            console.error("fetching error", err);
            throw err;
          }
    }
);
const clothesSlice = createSlice({
    name: "clothes",
    initialState:{
        clothes: [],
        loading: false,
        error: null
    } as ClothesState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchFilterClothes.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchFilterClothes.fulfilled, (state, action) => {
            state.loading = false;
            state.clothes = action.payload;
          })
          .addCase(fetchFilterClothes.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message ?? "Unknown error";
          })
    }
});
export default clothesSlice.reducer;