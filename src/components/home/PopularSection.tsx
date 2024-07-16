"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import PopularSectionCard from "./PopularSectionCard";
import { electricCards, popularCards, SUVCards, truckCards } from "./PopularCardInfo";

const categories = ["popular", "electric", "SUV", "truck"];

const PopularSection = () => {
 const [selectedCategory, setSelectedCategory] = useState("popular");
 const [columns, setColumns] = useState(2);
 useEffect(() => {
  const updateColumns = () => {
   if (window.innerWidth >= 1280) {
    setColumns(5);
   } else if (window.innerWidth >= 1024) {
    setColumns(4);
   } else if (window.innerWidth >= 768) {
    setColumns(3);
   } else {
    setColumns(2);
   }
  };
  window.addEventListener("resize", updateColumns);
  updateColumns();
  return () => window.removeEventListener("resize", updateColumns);
 }, []);
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
   <div className="mt-7 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
    {selectedCategory === "popular" && (
     <>
      {popularCards.slice(0, columns).map((card) => (
       <PopularSectionCard key={card.id} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "electric" && (
     <>
      {electricCards.slice(0, columns).map((card, index) => (
       <PopularSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "SUV" && (
     <>
      {SUVCards.slice(0, columns).map((card, index) => (
       <PopularSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
    {selectedCategory === "truck" && (
     <>
      {truckCards.slice(0, columns).map((card, index) => (
       <PopularSectionCard key={index} title={card.title} price={card.price} image={card.image} stats={card.stats} />
      ))}
     </>
    )}
   </div>
  </section>
 );
};
export default PopularSection;
