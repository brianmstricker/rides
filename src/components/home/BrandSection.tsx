import TitleH2 from "../global/TitleH2";
import BrandCard from "./BrandCard";
import audiLogo from "@/assets/audi-logo.png";
import bmwLogo from "@/assets/bmw-logo.png";
import fordLogo from "@/assets/ford-logo.png";
import hondaLogo from "@/assets/honda-logo.png";
import toyotaLogo from "@/assets/toyota-logo.png";
import hyundaiLogo from "@/assets/hyundai-logo.png";
import chevroletLogo from "@/assets/chevrolet-logo.png";
import nissanLogo from "@/assets/nissan-logo.png";
import volkswagenLogo from "@/assets/volkswagen-logo.png";
import subaruLogo from "@/assets/subaru-logo.png";
import kiaLogo from "@/assets/kia-logo.png";
import teslaLogo from "@/assets/tesla-logo.png";

const BrandSection = () => {
 return (
  <section className="contain mt-24">
   <TitleH2 title="Shop Brands" />
   <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    <BrandCard text="Audi" logo={audiLogo} />
    <BrandCard text="Ford" logo={fordLogo} />
    <BrandCard text="BMW" logo={bmwLogo} imgSize="h-14" />
    <BrandCard text="Honda" logo={hondaLogo} />
    <BrandCard text="Toyota" logo={toyotaLogo} />
    <BrandCard text="Hyundai" logo={hyundaiLogo} />
    <BrandCard text="Chevrolet" logo={chevroletLogo} />
    <BrandCard text="Nissan" logo={nissanLogo} imgSize="w-24" />
    <BrandCard text="Volkswagen" logo={volkswagenLogo} imgSize="h-16" />
    <BrandCard text="Subaru" logo={subaruLogo} />
    <BrandCard text="Kia" logo={kiaLogo} />
    <BrandCard text="Tesla" logo={teslaLogo} />
   </div>
  </section>
 );
};
export default BrandSection;
