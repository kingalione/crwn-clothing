import React, { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { CartContext } from "../../contexts/CartContext";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, TotalContainer} from "./Checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${cartTotal}</TotalContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
