import React from "react";

import DirectoryItem from "../directory-item/DirectoryItem";
import { CategoryMenuContainer } from "./CategoryMenu.styles";

const CategoryMenu = ({ categories }) => {
  return (
    <CategoryMenuContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </CategoryMenuContainer>
  );
};

export default CategoryMenu;
