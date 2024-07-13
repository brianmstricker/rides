import PopularSection from "@/components/home/PopularSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
 return (
  <main className="pb-10">
   <HeroSection />
   <PopularSection />
   <ChooseUsSection />
  </main>
 );
}
