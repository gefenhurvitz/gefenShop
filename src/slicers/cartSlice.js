import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct } from "./cartAPI";

const initialState = {
  cartItems: [],
  loading: "idle",
};

export const addCartDataAsync = createAsyncThunk(
  "cartProducts/addProduct",
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCartDataAsync.fulfilled, (state, action) => {
      console.log("called addCartDataAsync extra reducer ");
      // make cost for the item recived from the API call
      const item = action.payload;
      // check if that item is already excist in the cart
      const excistedItem = state.cartItems.find(
        (x) => x.product === item.product
      );

      if (excistedItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === excistedItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

      // state.cartItems = action.payload;
      // state.loading = "fulfilled";
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment } = productSlice.actions;

// export const selectProducts = (state) => state.products.productList;
// export const selectLoading = (state) => state.products.loading;

export default cartSlice.reducer;
