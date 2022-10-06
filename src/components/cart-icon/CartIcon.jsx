import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/CartSelector";
import { setIsCartOpen } from "../../store/cart/CartAction";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./CartIcon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
