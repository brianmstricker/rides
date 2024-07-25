import BrandSection from "@/components/home/BrandSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import HeroSection from "@/components/home/HeroSection";
import ReviewSection from "@/components/home/ReviewSection";
import ShopSection from "@/components/home/ShopSection";

export default function Home() {
 return (
  <main className="pb-10">
   <HeroSection />
   <ShopSection />
   <BrandSection />
   <ChooseUsSection />
   <ReviewSection />
  </main>
 );
}
