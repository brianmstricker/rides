import Image from "next/image";
import heroImage from "@/assets/hero-img3.jpg";
import BrowseByType from "@/components/home/BrowseByType";
import HomeSearchBar from "@/components/home/HomeSearchBar";
import ChooseUsCard from "@/components/home/ChooseUsCard";

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
      <p className="text-center text-sm sm:text-base">Search from a rich collection of vehicles.</p>
      <h1 className="text-center text-[7vw] sm:text-5xl md:text-6xl tracking-wider font-bold leading-relaxed">Find the perfect ride</h1>
      <div className="max-w-[661px] px-2">
       <HomeSearchBar />
       <div className="mt-2 text-center">or</div>
       <BrowseByType />
      </div>
     </div>
    </div>
   </section>
   <section className="contain px-4 mt-20">
    <h2 className="text-center text-[7vw] sm:text-4xl font-bold">Why Choose Us?</h2>
    {/* <div className="grid grid-cols-4 gap-10 mt-4 h-40">
     <ChooseUsCard />
     <ChooseUsCard />
     <ChooseUsCard />
     <ChooseUsCard />
    </div> */}
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
