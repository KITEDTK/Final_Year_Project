import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { Clothes, ClothesState } from "./clothesType";

const BASE_URL = "http://localhost:4000/clothes/admin";

export const fetchAllClothes = createAsyncThunk<Clothes[]>(
    "clothes/admin/get-all-clothes",
    async()=>{
        try {
            const response: AxiosResponse<Clothes[]> = await axios.get(BASE_URL, {
              headers: { "Content-Type": "application/json" },
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
    extraReducers: (builder) =>{
        builder
        .addCase(fetchAllClothes.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchAllClothes.fulfilled, (state, action) => {
            state.loading = false;
            state.clothes = action.payload;
          })
          .addCase(fetchAllClothes.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Unknown error";
          })
    }
})

export default clothesSlice.reducer;