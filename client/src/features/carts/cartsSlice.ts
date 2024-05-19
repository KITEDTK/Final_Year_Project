import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { AddItemInput, BaseCart, CartsState, UserId, DeleteItemInput, ItemInLocalCarts, LocalCarts } from './cartsType';

const BASE_URL = "http://localhost:4000/carts";
export const fetchAddItemToCart = createAsyncThunk<BaseCart[], AddItemInput>(
    "carts/add-to-cart",
    async ({ userId, clothDetailId }) => {
        try {
            const response: AxiosResponse<BaseCart[]> = await axios.post(
                `${BASE_URL}/users/${userId}`, 
                { clothDetailId },
                { headers: { "Content-Type": "application/json" } }
            );
            return response.data;
        } catch (err) {
            console.error('Thêm vào giỏ hàng thất bại', err);
            throw err; 
        }
    }
);
export const fetchItemInCart = createAsyncThunk<BaseCart[], UserId>(
    "carts/get-cart-info",
    async ({ userId }) => {
        try {
            const response: AxiosResponse<BaseCart[]> = await axios.get(
                `${BASE_URL}/users/${userId}`, 
                { headers: { "Content-Type": "application/json" } }
            );
            return response.data;
        } catch (err) {
            console.error('Lấy thông tin giỏ hàng thất bại', err);
            throw err; 
        }
    }
);
export const fetchDeleteItemInCart = createAsyncThunk<BaseCart[], DeleteItemInput>(
    "carts/delete-item-in-cart",
    async ({userId, cartId})=>{
        try {
            const response: AxiosResponse<BaseCart[]> = await axios.delete(
                `${BASE_URL}/${cartId}/users/${userId}`, 
                { headers: { "Content-Type": "application/json" } }
            );
            return response.data;
        } catch (err) {
            console.error('Xóa giỏ hàng thất bại', err);
            throw err; 
        }
    }
)
const cartsSlice = createSlice({
    name: "carts",
    initialState:{
        carts: [],
        loading: false,
        error: null,
        localCarts: {} as LocalCarts,
    } as CartsState,
    reducers:{
        addItemInLocalCart: (state, action: PayloadAction<ItemInLocalCarts>) =>{
            const newItem = action.payload;
            if(!state.localCarts){
                state.localCarts = {
                    items: [newItem],
                    amount: 1,
                    totalPrice: newItem.price
                }
            }else{
                const existingItem = state.localCarts.items.find((item)=> item.clothDetailId === newItem.clothDetailId)
                if(existingItem){
                    existingItem.amount += newItem.amount;
                }else{
                    state.localCarts.items.push(newItem);
                }
                state.localCarts.totalPrice += newItem.price * newItem.amount;
            }
        },
        removeItemFromLocalCart(state, action: PayloadAction<string>) {
            const clothDetailIdToRemove = action.payload;
            if (state.localCarts) {
              const updatedItems = state.localCarts.items.filter((item) => item.clothDetailId !== clothDetailIdToRemove);
              const removedItem = state.localCarts.items.find((item) => item.clothDetailId === clothDetailIdToRemove);
              if (removedItem) {
                state.localCarts.amount -= removedItem.amount;
                state.localCarts.totalPrice -= removedItem.price * removedItem.amount;
                state.localCarts.items = updatedItems;
              }
            }
          },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchAddItemToCart.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAddItemToCart.fulfilled, (state, action)=>{
            state.loading = false;
            state.carts = action.payload;
        })
        .addCase(fetchAddItemToCart.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message ?? "Unknown error";
        })
        .addCase(fetchItemInCart.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchItemInCart.fulfilled, (state, action)=>{
            state.loading = false;
            state.carts = action.payload;
        })
        .addCase(fetchItemInCart.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message ?? "Unknown error";
        })
        .addCase(fetchDeleteItemInCart.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchDeleteItemInCart.fulfilled, (state, action)=>{
            state.loading = false;
            state.carts = action.payload;
        })
        .addCase(fetchDeleteItemInCart.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message ?? "Unknown error";
        })
    }
});
export const  {addItemInLocalCart, removeItemFromLocalCart} = cartsSlice.actions;
export default cartsSlice.reducer;