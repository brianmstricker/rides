import Image from "next/image";
import heroImage from "@/assets/hero-img3.jpg";
import HomeSearchbar from "@/components/home/HomeSearchbar";
import BrowseByType from "@/components/home/BrowseByType";

export default function Home() {
 return (
  <main className="pb-10">
   <section>
    <div className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center">
     <Image
      src={heroImage}
      alt="hero"
      fill
      className="object-cover object-[75%_50%] sm:object-[50%_52%] -z-[1] brightness-[.25]"
      priority
      quality={100}
      sizes="100vw"
      loading="eager"
     />
     <div className="text-white">
      <p className="text-center text-sm sm:text-base">Search from a rich collection of rides.</p>
      <h1 className="text-center text-2xl sm:text-6xl tracking-wider font-semibold leading-relaxed">Find the perfect vehicle</h1>
      <div className="max-w-[757px]">
       {/* <HomeSearchbar /> */}
       <div className="mt-2 text-center">or</div>
       <BrowseByType />
      </div>
     </div>
    </div>
   </section>
   <section className="contain px-4 mt-20 grid grid-cols-2 gap-10">
    <div className="bg-blue-200 dark:bg-blue-400 h-64 rounded-md p-4 flex items-end">
     <h2 className="">Looking to sell your vehicle?</h2>
    </div>
    <div className="bg-red-300 h-64 rounded-md p-4">2</div>
   </section>
  </main>
 );
}
