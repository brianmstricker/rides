import Image from "next/image";
import heroImage from "@/assets/hero-img3.jpg";
import HomeSearchbar from "@/components/home/HomeSearchbar";
import BrowseByType from "@/components/home/BrowseByType";

export default function Home() {
 return (
  <main className="pb-10">
   <section>
    <div className="relative w-full h-screen sm:h-[80vh] flex items-center justify-center">
     <Image
      src={heroImage}
      alt="hero"
      fill
      className="object-cover object-[75%_50%] sm:object-[50%_52%] -z-[1] brightness-[.25] filter blur-[1px]"
      priority
      quality={100}
      sizes="100vw"
      loading="eager"
     />
     <div className="text-white">
      <p className="text-center">Search from a rich collection of rides.</p>
      <h1 className="text-6xl tracking-wider font-semibold leading-relaxed">Find the perfect vehicle</h1>
      <div className="max-w-[757px]">
       <HomeSearchbar />
       <div className="mt-6 text-center">or</div>
       <BrowseByType />
      </div>
     </div>
    </div>
   </section>
   <section className="contain px-4 mt-[15vh] grid grid-cols-2 gap-4">
    <div className="bg-blue-300 h-40 rounded-md p-4">Wanting to sell your vehicle?</div>
    <div className="bg-red-300 h-40 rounded-md p-4">2</div>
   </section>
  </main>
 );
}
