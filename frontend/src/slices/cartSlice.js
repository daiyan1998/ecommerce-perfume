import { updateCart } from "@/utils/cartUtils";
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    // If on client-side, attempt to retrieve cart from localStorage
    const storedCart = localStorage.getItem("cart");
    return {
      cartItems: storedCart ? JSON.parse(storedCart).cartItems : [],
    };
  } else {
    // If on server-side, cart is empty
    return {
      cartItems: [],
    };
  }
};

const initialState = getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (x) => x._id === item._id && x.ml === item.ml
      );
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          (x._id === existItem._id) & (x.ml === existItem.ml) ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.cartUniqueId !== action.payload.cartUniqueId
      );

      return updateCart(state);
    },

    changeItemCount: (state, action) => {
      const item = action.payload;

      state.cartItems = state.cartItems.map((x) => {
        if (x.cartUniqueId === item.cartUniqueId) return item;
        return x;
      });

      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart, changeItemCount } = cartSlice.actions;

export default cartSlice.reducer;
