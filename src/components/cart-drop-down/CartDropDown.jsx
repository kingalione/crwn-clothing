import React, { useContext } from "react";
import Button from "../button/Button";

import { CartContext } from "../../contexts/CartContext";

import CartItem from "../cart-item/CartItem";

import "./CartDropDown.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>To checkout</Button>
    </div>
  );
};

export default CartDropDown;
