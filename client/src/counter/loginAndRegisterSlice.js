import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:4000/users";
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
  isAuth: false,
  loading: false,
  error: null,
}
const loginAndRegisterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signOut: (state)=>{
      state.isAuth = false;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfoAndToken = action.payload;
      state.isAuth = true;
    })
  }
});
export const {signOut} = loginAndRegisterSlice.actions;
export default loginAndRegisterSlice.reducer;
