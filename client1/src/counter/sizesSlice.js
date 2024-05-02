import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/sizes';
export const getAllSizes = createAsyncThunk(
    'sizes/get-all-sizes',
    async()=>{
        try{
            const response = await axios({
                method: 'get',
                url: `${BASE_URL}/get-all-size`,
                headers: { 'Content-Type': 'application/json' },
            });
            //console.log(response.data);
            return response.data;
        }catch(err){
            throw new Error('Failed to fetch all sizes,error: ',err);
        }
    }
);
export const sizesSlice = createSlice({
    name: 'sizes',
    initialState:{
        sizes: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllSizes.fulfilled,(state,action)=>{
            state.loading = false;
            state.sizes = action.payload;
        })
    }
});
export default sizesSlice.reducer;