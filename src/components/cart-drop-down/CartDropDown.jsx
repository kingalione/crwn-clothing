import React, { useContext } from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import CartItem from "../cart-item/CartItem";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropDown.styles.jsx";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
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
