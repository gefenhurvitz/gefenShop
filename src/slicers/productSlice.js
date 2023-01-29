import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Loader from "../components/Loader";
import { fetchProds } from "./productAPI";

const initialState = {
  productList: [],
  loading: "idle",
};

export const getDataAsync = createAsyncThunk(
  "products/fetchProds",
  async () => {
    const response = await fetchProds();
    // console.log(response.data)
    console.log("get product list from server");
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.loading = "fulfilled";
      })
      .addCase(getDataAsync.pending, (state, action) => {
        state.loading = "pending";
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const selectProducts = (state) => state.products.productList;
export const selectLoading = (state) => state.products.loading;

export default productSlice.reducer;
