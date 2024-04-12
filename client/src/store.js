import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './counter/cartSlice'
import createStore from 'react-auth-kit';

export default configureStore({
  reducer: {
    counter: cartSlice
  },
});
