import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import {
  ClothByBarcode,
  ClothDetailsUpdateInput,
  Clothes,
  ClothesState,
  CreateClothesInput,
  GenerateBarcodeInput,
  SingleClothes,
  UpdateClothesInput,
} from "./clothesType";

const BASE_URL = "http://localhost:4000/clothes/admin";

export const fetchAllClothes = createAsyncThunk<Clothes[], number>(
  "clothes/admin/get-all-clothes",
  async (page: number) => {
    try {
      const response: AxiosResponse<Clothes[]> = await axios.get(
        `${BASE_URL}/page/${page}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchSingleClothes = createAsyncThunk<SingleClothes, string>(
  "clothes/fetchSingleClothes",
  async (clothesId: string) => {
    try {
      const response: AxiosResponse<SingleClothes> = await axios.get(
        `http://localhost:4000/clothes/${clothesId}/admin`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchMaxQuantityClothes = createAsyncThunk<number>(
  "clothes/maxQuantity",
  async () => {
    try {
      const response: AxiosResponse<number> = await axios.get(
        `http://localhost:4000/clothes/admin/maxQuantity`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchUpdateClothesAdmin = createAsyncThunk<
  SingleClothes,
  UpdateClothesInput
>(
  "clothes/update",
  async ({ clothesId, name, categoryId, brand, location, price }) => {
    try {
      const response: AxiosResponse<SingleClothes> = await axios.patch(
        `http://localhost:4000/clothes/admin/${clothesId}`,
        {
          name: name,
          categoryId: categoryId,
          brand: brand,
          location: location,
          price: price,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchGenerateBarcode = createAsyncThunk<
  string,
  GenerateBarcodeInput
>("clothes/generateBarcode", async ({ oldBarcode }) => {
  try {
    const response: AxiosResponse<string> = await axios.post(
      `${BASE_URL}/barcode`,
      {
        oldBarcode: oldBarcode,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (err) {
    console.error("fetching error", err);
    throw err;
  }
});
export const fetchCreateClothes = createAsyncThunk<Clothes, CreateClothesInput>(
  "clothes/create",
  async ({ name, brand, location, initPrice, price, categoryId }) => {
    try {
      const response: AxiosResponse<Clothes> = await axios.post(
        `${BASE_URL}`,
        {
          name: name,
          brand: brand,
          location: location,
          initPrice: initPrice,
          price: price,
          categoryId: categoryId,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
export const fetchAddClothDetailQuantity = createAsyncThunk<
  any,
  ClothDetailsUpdateInput
>("clothes/clothDetails/add-quantity", async ({ clothDetailId, quantity }) => {
  try {
    const response: AxiosResponse<any> = await axios.patch(
      `${BASE_URL}/clothDetails/${clothDetailId}/add-quantity`,
      {
        quantity: quantity,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (err) {
    console.error("fetching error", err);
    throw err;
  }
});
export const fetchUpdateClothDetailQuantity = createAsyncThunk<
  any,
  ClothDetailsUpdateInput
>("clothes/clothDetails/add-quantity", async ({ clothDetailId, quantity }) => {
  try {
    const response: AxiosResponse<any> = await axios.patch(
      `${BASE_URL}/clothDetails/${clothDetailId}/update-quantity`,
      {
        quantity: quantity,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (err) {
    console.error("fetching error", err);
    throw err;
  }
});
export const fetchClothByBarcode = createAsyncThunk<ClothByBarcode, string>(
  "cloth/barcode",
  async (barcode) => {
    try {
      const response: AxiosResponse<ClothByBarcode> = await axios.post(
        `${BASE_URL}/barcode/search`,
        {
          barcode: barcode,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (err) {
      console.error("fetching error", err);
      throw err;
    }
  }
);
const clothesSlice = createSlice({
  name: "clothes",
  initialState: {
    clothes: [],
    loading: false,
    singleClothes: {} as SingleClothes,
    maxClothesQuantity: 0 as number,
    barcode: "",
    error: null,
  } as ClothesState,
  reducers: {
    resetClothes(state) {
      state.clothes = [];
    },
    resetBarcode(state) {
      state.barcode = "";
    },
  },
  extraReducers: (builder) => {
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
      .addCase(fetchSingleClothes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleClothes.fulfilled, (state, action) => {
        state.loading = false;
        state.singleClothes = action.payload;
      })
      .addCase(fetchSingleClothes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchMaxQuantityClothes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMaxQuantityClothes.fulfilled, (state, action) => {
        state.loading = false;
        state.maxClothesQuantity = action.payload;
      })
      .addCase(fetchMaxQuantityClothes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchUpdateClothesAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUpdateClothesAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.singleClothes = action.payload;
      })
      .addCase(fetchUpdateClothesAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchGenerateBarcode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenerateBarcode.fulfilled, (state, action) => {
        state.loading = false;
        state.barcode = action.payload;
      })
      .addCase(fetchGenerateBarcode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});
export const { resetClothes, resetBarcode } = clothesSlice.actions;
export default clothesSlice.reducer;
