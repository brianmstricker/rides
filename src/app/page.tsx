import ChooseUsSection from "@/components/home/ChooseUsSection";
import HeroSection from "@/components/home/HeroSection";
import ShopSection from "@/components/home/ShopSection";

export default function Home() {
 return (
  <main className="pb-10">
   <HeroSection />
   <ShopSection />
   {/* todo: top brands section: https://dribbble.com/shots/21698510-Car-Dealership-Website-Vehicle-UI-kit-Car-Automobile */}
   <ChooseUsSection />
   {/* todo: customer review section: https://dribbble.com/shots/16811232-Car-Rental-Landing-Page */}
  </main>
 );
}
