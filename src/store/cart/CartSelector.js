import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, value) => sum + value.quantity * value.price, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, value) => sum + value.quantity, 0)
);
