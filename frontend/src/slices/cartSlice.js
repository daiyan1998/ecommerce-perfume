import { updateCart } from "@/utils/cartUtils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (x) => x._id === item._id && x.ml === item.ml
      );
      console.log(existItem);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          (x._id === existItem._id) & (x.ml === existItem.ml) ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      console.log(state.cartItems);

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x._id !== action.payload._id && x.ml !== action.payload.ml
      );

      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;