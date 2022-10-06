import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { CategoryContainer, CategoryTitle } from "./Category.styles";
import { selectCategoriesMap } from "../../store/categories/CategorySelector";

import ProductCard from "../../components/product-card/ProductCard";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log('render/re-rendering category component');

  useEffect(() => {
    console.log('effect fired colling setProducts');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
