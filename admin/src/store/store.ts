import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import clothesSlice from "../features/clothes/clothesSlice";
const persitConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  clothes: clothesSlice
});
const persistedReducer = persistReducer(persitConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;