import Image from "next/image";
import heroImage from "@/assets/hero-img3.jpg";
import BrowseByType from "@/components/home/BrowseByType";
import HomeSearchBar from "@/components/home/HomeSearchBar";

const HeroSection = () => {
 return (
  <section>
   <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <Image
     src={heroImage}
     alt="hero"
     fill
     className="object-cover object-[75%_50%] sm:object-[50%_52%] -z-[1] brightness-[.15]"
     priority
     quality={100}
     sizes="100vw"
     loading="eager"
    />
    <div className="text-white pb-4">
     <p className="text-center text-sm sm:text-base text-gray-300">Search from a rich collection of vehicles.</p>
     <h1 className="text-center text-[7vw] sm:text-5xl md:text-6xl tracking-wider font-bold leading-relaxed">Find the perfect ride</h1>
     <div className="max-w-[650px] px-2">
      <HomeSearchBar />
      <div className="mt-2 text-center">or</div>
      <BrowseByType />
     </div>
    </div>
   </div>
  </section>
 );
};
export default HeroSection;
