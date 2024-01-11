import { createSlice } from "@reduxjs/toolkit";

const select = createSlice({
  name: "select",
  initialState: {
    qty: 0,
    ml: 0,
    price: 0,
  },
  reducers: {
    changeMl: (state, action) => {
      state.ml = action.payload;
    },
    changeQty: (state, action) => {
      state.qty = state.qty + action.payload;
      console.log(state.qty);
    },
    changePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { changeMl, changeQty, changePrice } = select.actions;

export default select.reducer;
