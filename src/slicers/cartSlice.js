import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct } from "./cartAPI";



const initialState = {
  cartItems: [],
  loading: "idle",
};

export const getCartDataAsync = createAsyncThunk(
  "products/fetchProds",
  async () => {
    const response = await fetchProds();
    // console.log(response.data)
    console.log("get product list from server");
    return response.data;
  }
);

export const addCartDataAsync = createAsyncThunk(
  "products/fetchProds",
  async () => {
    const response = await addProduct();
    // console.log(response.data)
    console.log("get product list from server");
    return response.data;
  }
);



export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.loading = "fulfilled";
      })
  },
});

// Action creators are generated for each case reducer function
export const { increment } = productSlice.actions;

export const selectProducts = (state) => state.products.productList;
export const selectLoading = (state) => state.products.loading;

export default cartSlice.reducer;
