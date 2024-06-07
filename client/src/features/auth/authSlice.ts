import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Auth, InputLogin, AuthState } from "./authTypes";

const BASE_URL = "http://localhost:4000/users";

export const fetchLogin = createAsyncThunk<Auth, InputLogin>(
  "user/login",
  async ({ usernameOrEmail, password }) => {
    const response: AxiosResponse<Auth> = await axios.post(
      `${BASE_URL}/login`,
      { usernameOrEmail, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    loading: false,
    error: null,
  } as AuthState,
  reducers: {
    resetAuth: (state) => {
      state.auth = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
