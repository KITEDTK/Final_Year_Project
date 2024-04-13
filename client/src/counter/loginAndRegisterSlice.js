import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import axios from "axios";

const BASE_URL = "http://localhost:4000/loginAndRegister";

export const fetchUserLogin = createAsyncThunk(
  "users/login",
  async ({usernameOrEmail, password}) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/login`,
        headers: { 'Content-Type': 'application/json' },
        data :JSON.stringify({
            usernameOrEmail: usernameOrEmail,
            password: password,
        })
      });
      return response.data;
    } catch (err) {
      //Xử lí lỗi ở đây
      console.log("Wrong username or password", err);
    }
  }
);
const initialState = {
  userInfoAndToken: {},
  value: 0,
  loading: false,
  error: null,
}
const loginAndRegisterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfoAndToken = action.payload;
    });
  }
});
export default loginAndRegisterSlice.reducer;
