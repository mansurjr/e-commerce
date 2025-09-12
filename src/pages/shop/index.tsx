import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import type { IProduct } from "../../types";

const Shop = () => {
  const data = useFetch<{ products: IProduct[] }>("/products", {
    limit: 4,
  }).data;
  return (
    <div className="container">
      <h2>Shop</h2>
      <ProductView data={data?.products} />
    </div>
  );
};

export default memo(Shop);
