import TitleH2 from "../global/TitleH2";
import BrandCard from "./BrandCard";

const BrandSection = () => {
 return (
  <section className="contain mt-24">
   <TitleH2 title="Shop Brands" />
   <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    <BrandCard />
    <BrandCard />
    <BrandCard />
    <BrandCard />
    <BrandCard />
    <BrandCard />
    <BrandCard />
    <BrandCard />
   </div>
  </section>
 );
};
export default BrandSection;
