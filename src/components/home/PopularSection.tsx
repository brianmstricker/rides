"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import car1 from "@/assets/camry.jpg";
import Image from "next/image";
import { Activity, ArrowUpRight, Gauge, LifeBuoy } from "lucide-react";

const categories = ["popular", "electric", "suv", "truck"];

const PopularSection = () => {
 const [selectedCategory, setSelectedCategory] = useState("popular");
 // todo: create 5/6 cards for each category
 return (
  <section className="contain mt-20">
   <h2 className="text-center text-[7vw] sm:text-4xl font-bold">Popular vehicles</h2>
   <ul className="mt-7 flex justify-center items-center gap-6 border-b [&>*]:pb-2">
    {categories.map((category) => (
     <li
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={cn(
       "capitalize border-b-[3px] border-transparent cursor-pointer transition-all duration-300",
       selectedCategory === category && "border-b-blue-600"
      )}
     >
      {category}
     </li>
    ))}
   </ul>
   <div className="mt-7 grid grid-cols-4">
    {selectedCategory === "popular" && (
     <div className="border rounded-md overflow-hidden">
      <div className="relative w-full h-40">
       <Image src={car1} alt="car" fill className="object-cover" />
      </div>
      <div className="py-2 px-4 bg-primary-foreground">
       <h3 className="font-bold text-2xl">Toyota Camry</h3>
       <div className="mt-4 flex justify-between text-[15px]">
        <div className="flex flex-col items-center gap-1">
         <Gauge size={22} />
         <div>32 MPG</div>
        </div>
        <div className="flex flex-col items-center gap-1">
         <LifeBuoy size={22} />
         <div>AWD</div>
        </div>
        <div className="flex flex-col items-center gap-1">
         <Activity size={22} />
         <div>Hybrid</div>
        </div>
       </div>
       <div className="mt-4 flex justify-between items-center">
        <div className="text-sm flex items-center gap-1">
         <span>View more</span>
         <ArrowUpRight />
        </div>
        <div>
         <span className="text-xs">from</span> <span className="font-bold text-xl">$28,000</span>
        </div>
       </div>
      </div>
     </div>
    )}
   </div>
  </section>
 );
};
export default PopularSection;
