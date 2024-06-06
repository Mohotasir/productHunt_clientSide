import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import TendingProduct from "./TrendingProduct/TendingProduct";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-2/3">
          <TendingProduct></TendingProduct>
        </div>
        <div className="lg:w-1/3">
          <FeaturedProduct></FeaturedProduct>
        </div>
      </div>
    </div>
  );
}
