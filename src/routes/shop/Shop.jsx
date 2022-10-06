import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import { setCategories } from "../../store/categories/CategoryAction"; 

const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
