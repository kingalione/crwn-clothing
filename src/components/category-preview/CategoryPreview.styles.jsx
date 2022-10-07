import styled from "styled-components";
import { Link } from "react-router-dom";
import tw from "twin.macro";

export const CategoryPreviewContainer = tw.div`
  flex
  flex-col
  py-5
`;

export const TitleContainer = tw(Link)`
  text-3xl
`;

export const PreviewContainer = tw.div`
  grid
  gap-2
  lg:grid-cols-4
`;
