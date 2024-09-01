import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  Auth,
  InputLogin,
  AuthState,
  RegisterOutput,
  RegisterInput,
  VerifyRegisterInput,
} from "./authTypes";

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
export const fetchRegister = createAsyncThunk<RegisterOutput, RegisterInput>(
  "user/register",
  async ({ email, phoneNumber, password, fullname, username }) => {
    try {
      const response: AxiosResponse<RegisterOutput> = await axios.post(
        `${BASE_URL}/register`,
        {
          username,
          password,
          fullname,
          phoneNumber,
          email,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return error.response
      } else if(error.request) {
        return error.request
      }
    }
  }
);
export const fetchSendVerifyToken = createAsyncThunk<any, string>(
  "user/send-email",
  async (email) => {
    const response: AxiosResponse<any> = await axios.post(
      `${BASE_URL}/send-token`,
      {
        email: email,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  }
);
export const fetchVerifyToken = createAsyncThunk<boolean,VerifyRegisterInput>(
  "user/verify",
  async({email, token})=>{
    const response: AxiosResponse<boolean> = await axios.post(
      `${BASE_URL}/verify-register`,
      {
        email: email,
        token: token
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  }
)
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
      })
      .addCase(fetchRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state) => {
        state.loading = false;

      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
        console.log('error');
      });
  },
});
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
