import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Colors,ColorsState } from "./colorsTypes";

const BASE_URL = "http://localhost:4000/colors";

export const fetchAllColors = createAsyncThunk<Colors[]>(
    "colors/get-all-colors",
    async ()=>{
        try {
            const response: AxiosResponse<Colors[]> = await axios.get(`${BASE_URL}`, {
              headers: { "Content-Type": "application/json" },
            });
            return response.data;
          } catch (err) {
            console.error("fetching error", err);
            throw err;
          }
    }
)
const colorsSlice = createSlice({
    name: "sizes",
    initialState: {
      colors: [],
      loading: false,
      error: null,
    } as ColorsState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllColors.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAllColors.fulfilled, (state, action) => {
          state.loading = false;
          state.colors = action.payload;
        })
        .addCase(fetchAllColors.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? "Unknown error";
        });
    },
  });
  export default colorsSlice.reducer;

