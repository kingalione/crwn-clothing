import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyContainer,
} from "./DirectoryItem.styles";

import React from "react";

const DirectoryItem = (category) => {
  const { id, imageUrl, title, route } = category.category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <BodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
