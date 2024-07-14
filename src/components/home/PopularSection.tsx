"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import PopularSectionCard from "./PopularSectionCard";
import { Activity, Gauge, LifeBuoy } from "lucide-react";

const categories = ["popular", "electric", "suv", "truck"];
const popularCards = [
 {
  title: "Toyota Camry",
  price: "28,000",
  stats: [
   { icon: Gauge, text: "32 MPG" },
   { icon: LifeBuoy, text: "AWD" },
   { icon: Activity, text: "Hybrid" },
  ],
 },
 {
  title: "Toyota Camry",
  price: "28,000",
  stats: [
   { icon: Gauge, text: "32 MPG" },
   { icon: LifeBuoy, text: "AWD" },
   { icon: Activity, text: "Hybrid" },
  ],
 },
 {
  title: "Toyota Camry",
  price: "28,000",
  stats: [
   { icon: Gauge, text: "32 MPG" },
   { icon: LifeBuoy, text: "AWD" },
   { icon: Activity, text: "Hybrid" },
  ],
 },
 {
  title: "Toyota Camry",
  price: "28,000",
  stats: [
   { icon: Gauge, text: "32 MPG" },
   { icon: LifeBuoy, text: "AWD" },
   { icon: Activity, text: "Hybrid" },
  ],
 },
 {
  title: "Toyota Camry",
  price: "28,000",
  stats: [
   { icon: Gauge, text: "32 MPG" },
   { icon: LifeBuoy, text: "AWD" },
   { icon: Activity, text: "Hybrid" },
  ],
 },
];

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
   <div className="mt-7 grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
    {selectedCategory === "popular" && (
     <>
      {popularCards.slice(0, columns).map((card, index) => (
       <PopularSectionCard key={index} title={card.title} price={card.price} stats={card.stats} />
      ))}
     </>
    )}
   </div>
  </section>
 );
};
export default PopularSection;
