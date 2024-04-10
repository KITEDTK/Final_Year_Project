import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './counter/cartSlice'

export default configureStore({
  reducer: {
    counter: cartSlice
  },
})