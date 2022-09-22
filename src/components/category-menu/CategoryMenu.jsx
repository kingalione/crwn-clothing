import React from "react";

import CategoryItem from "../category-item/CategoryItem";

import './CategoryMenu.styles.scss';

const CategoryMenu = ({categories}) => {
  return (
    <div className="category-menu-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryMenu;
