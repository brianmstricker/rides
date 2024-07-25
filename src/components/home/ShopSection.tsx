"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { electricCards, popularCards, SUVCards, recentCards } from "./PopularCardInfo";
import ShopSectionCard from "./ShopSectionCard";
import TitleH2 from "../global/TitleH2";

const categories = ["popular", "electric", "SUV", "recent"];

const ShopSection = () => {
 const [selectedCategory, setSelectedCategory] = useState("popular");
 return (
  <section className="contain mt-24">
   <TitleH2 title="Shop Vehicles" />
   <ul className="flex justify-center items-center gap-6 border-b pb-2">
    {categories.map((category) => (
     <li key={category}>
      <button
       onClick={() => {
        setSelectedCategory(category);
       }}
       className={cn(
        "capitalize cursor-pointer transition-all duration-300 relative outline-none hover:text-mainPurple focus:text-mainPurple",
        selectedCategory === category && "pointer-events-none"
       )}
       tabIndex={category === selectedCategory ? -1 : 0}
      >
       <span>{category}</span>
       <div
        className={cn(
         "w-full h-[3px] bg-mainPurple transition-all duration-300 scale-x-0 absolute -bottom-2",
         selectedCategory === category && "scale-x-100"
        )}
       />
      </button>
     </li>
    ))}
   </ul>
   <div className="mt-7 grid grid-flow-col gap-2 overflow-x-auto snap-x snap-mandatory [&>*]:snap-start">
    {selectedCategory === "popular" && (
     <>
      {popularCards.map((card) => (
       <ShopSectionCard key={card.id} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "electric" && (
     <>
      {electricCards.map((card, index) => (
       <ShopSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "SUV" && (
     <>
      {SUVCards.map((card, index) => (
       <ShopSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "recent" && (
     <>
      {recentCards.map((card, index) => (
       <ShopSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
   </div>
  </section>
 );
};
export default ShopSection;
