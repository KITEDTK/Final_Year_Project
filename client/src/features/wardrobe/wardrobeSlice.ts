import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Wardrobe } from "./wardrobeTypes";

const BASE_URL = "http://localhost:4000/wardrobe";

export const fetchAllWardrobeByUsers = createAsyncThunk<Wardrobe[],any>(
    "wardrobe/get-all",
    async({userId})=>{
        try{
            const response: AxiosResponse<Wardrobe[]> = await axios.get(`${BASE_URL}/users/${userId}`,
                {headers: {"Content-Type": "application/json" }}
            );
            return response.data;
        }catch(err){
            console.error("Lấy sản phẩm thất bại", err);
            throw err; 
        }
    }
)
const wardrobeSlice = createSlice({
    name: "wardrobe",
    initialState:{
        wardrobe: [] ,
        loading: false,
        error: null
    } as any,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchAllWardrobeByUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchAllWardrobeByUsers.fulfilled, (state) => {
            state.loading = false;
          })
          .addCase(fetchAllWardrobeByUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Unknown error";
          });
    }
});
export default wardrobeSlice.reducer;