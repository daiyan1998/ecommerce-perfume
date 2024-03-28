export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // Calculate shipping price
  // Calculate total price
  state.totalPrice = Number(state.itemsPrice).toFixed(2);

  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(state));
  }

  return state;
};
