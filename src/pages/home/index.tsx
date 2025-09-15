import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import type { IProduct } from "../../types";
import SwiperCor from "./components/SwiperCor";
import CategoryGrid from "./components/CategoryGrid";
import Services from "./components/Services";
import Articles from "./components/Articles";
import SaleUp from "./components/SaleUp";
import Newsletter from "../../components/newsletter";

const Home = () => {
  const data = useFetch<{ products: IProduct[] }>("/products", {
    limit: 4,
  }).data;

  return (
    <div className="">
      <SwiperCor />
      <CategoryGrid />
      <ProductView data={data?.products} />
      <Services />
      <SaleUp />
      <Articles />
      <Newsletter />
    </div>
  );
};

export default memo(Home);
