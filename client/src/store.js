import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './counter/cartSlice'
import loginAndRegisterSlice from './counter/loginAndRegisterSlice';
import createStore from 'react-auth-kit';

export default configureStore({
  reducer: {
      cart: cartSlice,
      loginAndRegister: loginAndRegisterSlice
  },
});
