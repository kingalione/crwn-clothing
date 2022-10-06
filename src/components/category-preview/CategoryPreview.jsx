import ProductCard from "../product-card/ProductCard";

import {
  CategoryPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleContainer to={title}>{title.toUpperCase()}</TitleContainer>
      </h2>
      <PreviewContainer>
        {products.slice(1, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
