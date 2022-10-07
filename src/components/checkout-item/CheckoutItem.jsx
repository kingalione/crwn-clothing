import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  subtractItemFromCart,
  clearItemFromCart,
} from "../../store/cart/CartAction";

import { selectCartItems } from "../../store/cart/CartSelector";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  ValueContainer,
  ArrowContainer,
  BaseSpan,
  RemoveButton,
} from "./CheckoutItem.styles.jsx";

const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const subtractCheckoutItemFromCart = () =>
    dispatch(subtractItemFromCart(cartItems, checkoutItem));
  const addCheckoutItemFromCart = () => dispatch(addItemToCart(cartItems, checkoutItem));
  const clearCheckoutItemFromCart = () =>
    dispatch(clearItemFromCart(cartItems, checkoutItem));

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
