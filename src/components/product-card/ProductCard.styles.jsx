import styled from "styled-components";
import tw from "twin.macro";

import {
  InvertedButton
} from "../button/Button.styles";

export const ProductCardContainer = tw.div`
  w-full
  flex
  flex-col
  relative
`;

export const ProductCardImage = tw.img`
  rounded-md
  object-cover
  w-full
`;

export const ProductCardButton = tw(InvertedButton)`
  absolute
  bottom-20
  place-self-center
  opacity-80
  rounded-xl
`;

/**
width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
*/

export const Footer = tw.div`
  text-base
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
  