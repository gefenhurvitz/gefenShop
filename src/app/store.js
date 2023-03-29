import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slicers/productSlice'
import cartReducer from '../slicers/cartSlice'

export const store = configureStore({
    reducer: {
      products: productReducer,
      cartProducts: cartReducer
    },
  });