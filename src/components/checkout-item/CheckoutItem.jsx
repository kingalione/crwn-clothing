import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  ValueContainer,
  ArrowContainer,
  BaseSpan,
  RemoveButton
} from "./CheckoutItem.styles.jsx";

const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const { addItemToCart, subtractItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const subtractCheckoutItemFromCart = () => subtractItemFromCart(checkoutItem);
  const addCheckoutItemFromCart = () => addItemToCart(checkoutItem);
  const clearCheckoutItemFromCart = () => clearItemFromCart(checkoutItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <QuantityContainer>
        <ArrowContainer onClick={subtractCheckoutItemFromCart}>
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={addCheckoutItemFromCart}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearCheckoutItemFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
