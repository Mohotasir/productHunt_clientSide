import CouponSection from "./CouponSection/CouponSection";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import Slider from "./Slider/Slider";
import TendingProduct from "./TrendingProduct/TendingProduct";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Slider></Slider>
      <div className="flex flex-col my-8 mx-6 lg:flex-row gap-3 max-w-screen-xl md:mx-auto">
        <div className="lg:w-3/5">
          <TendingProduct></TendingProduct>
        </div>
        <div className="lg:w-2/5">
          <FeaturedProduct></FeaturedProduct>
        </div>
      </div>
      <CouponSection></CouponSection>
    </div>
  );
}
