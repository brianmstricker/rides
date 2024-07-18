import BrandSection from "@/components/home/BrandSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import HeroSection from "@/components/home/HeroSection";
import ShopSection from "@/components/home/ShopSection";

export default function Home() {
 return (
  <main className="pb-10">
   <HeroSection />
   <ShopSection />
   <BrandSection />
   <ChooseUsSection />
   {/* todo: customer review section: https://dribbble.com/shots/16811232-Car-Rental-Landing-Page */}
  </main>
 );
}
