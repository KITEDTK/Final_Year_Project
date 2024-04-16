import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = "http://localhost:4000/carts";
export const singleCart = createAsyncThunk(
    'cart/singleCart',
    async({cartId,clothId})=>{
        try{
            
        }catch(err){
            throw new Error('Failed to fetch item in cart,error: ',err);
        }
    }
);
export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async(cartId,clothId)=>{
        try{
            const response = await axios({
                method: 'post',
                url: `${BASE_URL}/add-to-cart/${cartId}`,
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify({
                    clothId: clothId
                })
            });
            return response.data;
        }catch(err){
            throw new Error('Failed to add item to cart,error: ',err);
        }
    }
);
export const deleteInCart = createAsyncThunk(
    'cart/deleteInCart',
    async(cartId,clothId)=>{
        try{
            const response = await fetch(`${BASE_URL}/delete-in-cart/${cartId}`,{
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    clothId: clothId
                })
            })
        }catch(err){
            throw new Error('Failed to delete item in cart,error: ',err);
        }
    }
);
export 
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        //fetch Cart
        .addCase(singleCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.items = action.payload; //action.payload là response được trả về từ hành động fetch api
        })
        //fetch add to cart
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.items.push(action.payload); //action.payload lần này là 1 creator
        })
        .addCase(deleteInCart.fulfilled,(state, action)=>{
            state.loading = false;
            const update = state.items.filter((items)=>{
                return items.id !== action.payload.clothId;
            });
            state.items = update;
        })
    }
})
export const selectItemsInCart = (state) => state.cart.items // state."name của slice"."items bên trong" // Dùng cho thằng selector
export default cartSlice.reducer;