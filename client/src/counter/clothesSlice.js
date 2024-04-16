import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:4000/clothes";

export const fetchAllClothes = createAsyncThunk(
    'clothes/get-all-clothes',
    async()=>{
        try{
            const response = await axios({
                method: 'get',
                url: `${BASE_URL}/get-all-clothes`,
                headers: { 'Content-Type': 'application/json' },
            })
            return response.data;
        }catch(err){
            console.log('fetching error');
        }
    }
);
const initialState = {
    clothes:{},
    loading: false,
    error: null
}
const clothesSlice = createSlice({
    name: 'clothes',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchAllClothes.fulfilled,(state, action)=>{
            state.loading = false;
            state.clothes = action.payload;
        })
    }
});

export default clothesSlice.reducer;