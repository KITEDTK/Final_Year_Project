import { createSlice } from "@reduxjs/toolkit";

// Định nghĩa kiểu cho state
interface AuthState {
    auth: boolean;
}

const initialState: AuthState = {
    auth: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state) {
            state.auth = true; 
        },
        logout(state) {
            state.auth = false; 
        }
    }
});

// Xuất các action creators và reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
