import { CART_ACTION_TYPES } from "./CartType";
import { createAction } from "../../utils/reducer/ReducerUtils";

export const setIsCartOpen = (isOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const subtractItemFromCart = (cartItems, productToSubtract) => {
  const newCartItems = subtractCartItem(cartItems, productToSubtract);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// HELPER FUNCTIONS #############################
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const subtractCartItem = (cartItems, productToSubtract) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToSubtract.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToSubtract.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToSubtract.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};
