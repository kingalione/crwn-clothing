import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const { addItemToCart, subtractItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const subtractCheckoutItemFromCart = () => subtractItemFromCart(checkoutItem);
  const addCheckoutItemFromCart = () => addItemToCart(checkoutItem);
  const clearCheckoutItemFromCart = () => clearItemFromCart(checkoutItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={subtractCheckoutItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addCheckoutItemFromCart}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <span className="remove-button" onClick={clearCheckoutItemFromCart}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
