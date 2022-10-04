import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
