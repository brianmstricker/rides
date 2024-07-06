import Image from "next/image";
import heroImage from "@/assets/hero-img.jpg";

export default function Home() {
 return (
  <main>
   <section className="mt-10 fixed left-0 right-0 w-full">
    <div className="relative w-full h-[32rem]">
     <Image
      src={heroImage}
      alt="hero"
      fill
      className="object-cover object-[30%_90%] sm:object-[50%_52%]"
      priority
      quality={100}
      sizes="100vw"
      loading="eager"
     />
    </div>
   </section>
  </main>
 );
}
