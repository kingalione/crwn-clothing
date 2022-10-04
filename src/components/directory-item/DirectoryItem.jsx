import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyContainer,
} from "./DirectoryItem.styles";

import React from "react";

const DirectoryItem = (category) => {
  const { id, imageUrl, title } = category.category;

  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <BodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
