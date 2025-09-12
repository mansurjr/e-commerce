import { memo } from "react";
import ProductDetailView from "./ProductDetailView";

const ProductDetail = () => {
  return (
    <div className="ProductDetail">
      <ProductDetailView />
    </div>
  );
};

export default memo(ProductDetail);
