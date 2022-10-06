import React from "react";
import { useSelector } from "react-redux";

import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/CartSelector";

import CartItem from "../cart-item/CartItem";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropDown.styles.jsx";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>To checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
