import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './counter/cartSlice'
import loginAndRegisterSlice from './counter/loginAndRegisterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import clothesSlice from './counter/clothesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginAndRegister','clothes']
};

const rootReducer = combineReducers({
    cart: cartSlice,
    loginAndRegister: loginAndRegisterSlice,
    clothes: clothesSlice
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
