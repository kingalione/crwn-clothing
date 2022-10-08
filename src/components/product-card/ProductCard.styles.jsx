import styled from "styled-components";
import tw from "twin.macro";

import { InvertedButton } from "../button/Button.styles";

export const ProductCardContainer = tw.div`
  w-full
  h-full
  flex
  flex-col
  relative
`;

export const ProductCardImage = tw.img`
  rounded-md
  object-cover
  w-full
  h-full
`;

export const ProductCardButton = tw(InvertedButton)`
  absolute
  bottom-10
  place-self-center
  opacity-80
  rounded-xl
`;

export const Footer = tw.div`
`;

export const Name = tw.span`
  text-2xl
  lg:text-base
  text-left
`;

export const Price = tw.span`
  text-2xl
  lg:text-base
  float-right
`;
