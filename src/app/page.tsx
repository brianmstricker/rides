import Image from "next/image";
import heroImage from "@/assets/hero-img3.jpg";
import BrowseByType from "@/components/home/BrowseByType";
import HomeSearchBar from "@/components/home/HomeSearchBar";
import ChooseUsCard from "@/components/home/ChooseUsCard";
import { Aperture, CheckCircle, CircleDollarSign, CircleHelp, MousePointer2 } from "lucide-react";

export default function Home() {
 return (
  <main className="pb-10">
   <section>
    <div className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center">
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
     <div className="text-white">
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
   <section className="contain px-4 mt-20">
    <h2 className="text-center text-[7vw] sm:text-4xl font-bold">Why Choose Us?</h2>
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
     <ChooseUsCard
      title="Convenience"
      icon={CheckCircle}
      color="text-green-500"
      description="Enjoy the convenience of browsing and buying vehicles online, right from the comfort of your home."
     />
     <ChooseUsCard
      title="Selection"
      icon={MousePointer2}
      color="text-blue-500"
      description="Discover a wide selection of vehicles, ranging from sedans to SUVs, to find the perfect ride that suits your needs."
     />
     <ChooseUsCard
      title="Pricing"
      icon={CircleDollarSign}
      color="text-yellow-500"
      description="Get competitive pricing on all vehicles, ensuring that you get the best value for your money."
     />
     <ChooseUsCard
      title="Support"
      icon={CircleHelp}
      color="text-red-500"
      description="Receive support from our AI assistant throughout your car buying journey, whenever you need it."
     />
    </div>
    {/* <div className="grid grid-cols-2 gap-10">
     <div className="bg-blue-200 dark:bg-blue-400 h-64 rounded-md p-4 flex items-end">
      <h2 className="">Looking to sell your vehicle?</h2>
     </div>
     <div className="bg-red-200 dark:bg-red-400 h-64 rounded-md p-4">2</div>
    </div> */}
   </section>
  </main>
 );
}
