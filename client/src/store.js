import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './counter/cartSlice'
import loginAndRegisterSlice from './counter/loginAndRegisterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginAndRegister']
};

const rootReducer = combineReducers({
    cart: cartSlice,
    loginAndRegister: loginAndRegisterSlice
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
