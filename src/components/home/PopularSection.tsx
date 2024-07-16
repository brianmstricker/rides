"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PopularSectionCard from "./PopularSectionCard";
import { electricCards, popularCards, SUVCards, truckCards } from "./PopularCardInfo";
import { InView, useInView } from "react-intersection-observer";

const categories = ["popular", "electric", "SUV", "truck"];

const PopularSection = () => {
 const [selectedCategory, setSelectedCategory] = useState("popular");
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
   <div className="mt-7 grid grid-flow-col gap-2 overflow-x-auto snap-x snap-mandatory [&>*]:snap-start">
    {selectedCategory === "popular" && (
     <>
      {popularCards.map((card) => (
       <PopularSectionCard key={card.id} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "electric" && (
     <>
      {electricCards.map((card, index) => (
       <PopularSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "SUV" && (
     <>
      {SUVCards.map((card, index) => (
       <PopularSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "truck" && (
     <>
      {truckCards.map((card, index) => (
       <PopularSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
   </div>
  </section>
 );
};
export default PopularSection;
