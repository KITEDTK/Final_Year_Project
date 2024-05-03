import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesSlice from "../features/categorires/categoriesSlice";
import clothesSlice from "../features/products/clothesSlice";
import sizesSlice from "../features/sizes/sizesSlice";
import colorsSilce from "../features/colors/colorsSilce";

const persitConfig = {
  key : "root",
  version: 1,
  storage
}
const reducer = combineReducers({
  categories : categoriesSlice,
  clothes: clothesSlice,
  sizes: sizesSlice,
  colors: colorsSilce
});
const persistedReducer = persistReducer(persitConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


