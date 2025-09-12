import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import type { IProduct } from "../../types";
import SwiperCor from "./components/SwiperCor";
import CategoryGrid from "./components/CategoryGrid";
import NewArrivals from "./components/NewArrivals";
import Services from "./components/Services";
import Articles from "./components/Articles";

const Home = () => {
  const data = useFetch<{ products: IProduct[] }>("/products", {
    limit: 4,
  }).data;

  return (
    <div className="container">
      <h2>Home</h2>
      <ProductView data={data?.products} />
      <SwiperCor />
      <CategoryGrid />
      <NewArrivals />
      <Services />
      <Articles />
    </div>
  );
};

export default memo(Home);
