import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/CartAction";
import { selectCartItems } from "../../store/cart/CartSelector";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
  ProductCardImage,
  ProductCardButton
} from "./ProductCard.styles.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>
      <ProductCardButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
