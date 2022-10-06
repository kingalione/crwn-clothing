import React from "react";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/CartSelector";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalContainer,
} from "./Checkout.styles.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
