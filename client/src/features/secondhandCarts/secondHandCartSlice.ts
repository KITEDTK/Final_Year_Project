import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  BaseLocal2handCart,
  Local2handCarts,
  SecondhandCart,
  SecondhandCartState,
} from "./secondHandCartTypes";

const BASE_URL = "http://localhost:4000/secondhandCart";
export const fetchAddItemTo2handCart = createAsyncThunk<SecondhandCart[], any>(
  "2hand/add-to-2handCart",
  async ({ userId, secondhandId, amount }) => {
    try {
      const response: AxiosResponse<SecondhandCart[]> = await axios.post(
        `${BASE_URL}/users/${userId}/secondhand/${secondhandId}`,
        {
          amount: amount,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("Thêm vào giỏ hàng thất bại", err);
      throw err;
    }
  }
);
export const fetch2handCartByUser = createAsyncThunk<SecondhandCart[], any>(
  "2hand/get-2hand-cartInfo",
  async ({ userId }) => {
    try {
      const response: AxiosResponse<SecondhandCart[]> = await axios.get(
        `${BASE_URL}/users/${userId}`,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (err) {
      console.error("Thêm vào giỏ hàng thất bại", err);
      throw err;
    }
  }
);
export const fetchDeleteItemIn2handCart = createAsyncThunk<
  SecondhandCart[],
  any
>("2hand/delete", async ({ secondhandCartId }) => {
  try {
    const response: AxiosResponse<SecondhandCart[]> = await axios.delete(
      `${BASE_URL}/${secondhandCartId}`,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (err) {
    console.error("Xóa giỏ hàng thất bại", err);
    throw err;
  }
});
const secondhandCart = createSlice({
  name: "2handCarts",
  initialState: {
    secondhandCarts: [],
    loading: false,
    error: null,
    local2handCarts: {
      items: [] as BaseLocal2handCart[],
      totalAmount: 0,
      totalPrice: 0,
    } as Local2handCarts,
  } as SecondhandCartState,
  reducers: {
    addItemInLocal2handCart: (
      state,
      action: PayloadAction<BaseLocal2handCart>
    ) => {
      const newItem = action.payload;
      if (!state.local2handCarts.items) {
        state.local2handCarts.items = [];
      }
      const existingItem = state.local2handCarts.items.find(
        (item) => item.secondhandId === newItem.secondhandId
      );
      if (existingItem) {
        existingItem.amount += newItem.amount;
      } else {
        state.local2handCarts.items.push(newItem);
      }
      // state.local2handCarts.totalPrice += newItem.price * newItem.amount;
      state.local2handCarts.totalAmount += newItem.amount;
    },
    removeItemFromLocal2handCart(state, action: PayloadAction<string>) {
      const secondhandIdToRemove = action.payload;
      if (state.local2handCarts) {
        const updatedItems = state.local2handCarts.items.filter(
          (item) => item.secondhandId !== secondhandIdToRemove
        );
        const removedItem = state.local2handCarts.items.find(
          (item) => item.secondhandId === secondhandIdToRemove
        );
        if (removedItem) {
          state.local2handCarts.totalAmount -= removedItem.amount;
          //state.local2handCarts.totalPrice -= removedItem.price * removedItem.amount;
          state.local2handCarts.items = updatedItems;
        }
      }
    },
    updateQuantityInLocal2handCart(
      state,
      action: PayloadAction<BaseLocal2handCart>
    ) {
      const { secondhandId, amount } = action.payload;
      const item = state.local2handCarts.items.find(
        (item) => item.secondhandId === secondhandId
      );
      const previousAmount = item?.amount;
      if (item && previousAmount) {
        item.amount = amount;
        state.local2handCarts.totalAmount += amount - previousAmount;
        //state.local2handCarts.totalPrice += (amount - previousAmount) * item.price;
      } else {
        console.log("Không tìm thấy sản phẩm trong giỏ hàng");
      }
    },
    resetLocal2handCarts(state) {
      state.local2handCarts.items = [];
      state.local2handCarts.totalAmount = 0;
      state.local2handCarts.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetch2handCartByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetch2handCartByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.secondhandCarts = action.payload;
      })
      .addCase(fetch2handCartByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchAddItemTo2handCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddItemTo2handCart.fulfilled, (state, action) => {
        state.loading = false;
        state.secondhandCarts = action.payload;
      })
      .addCase(fetchAddItemTo2handCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchDeleteItemIn2handCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeleteItemIn2handCart.fulfilled, (state, action) => {
        state.loading = false;
        state.secondhandCarts = action.payload;
      })
      .addCase(fetchDeleteItemIn2handCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});
export const {
  addItemInLocal2handCart,
  removeItemFromLocal2handCart,
  resetLocal2handCarts,
  updateQuantityInLocal2handCart,
} = secondhandCart.actions;
export default secondhandCart.reducer;
