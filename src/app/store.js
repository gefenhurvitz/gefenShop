import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slicers/productSlice'

export const store = configureStore({
    reducer: {
      products: productReducer,
    },
  });