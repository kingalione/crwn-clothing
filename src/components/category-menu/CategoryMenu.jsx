import React from "react";

import DirectoryItem from "../directory-item/DirectoryItem";
import './CategoryMenu.styles.scss';

const CategoryMenu = ({categories}) => {
  return (
    <div className="category-menu-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryMenu;
