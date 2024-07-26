"use client";
import { cn } from "@/lib/utils";
import TitleH2 from "../global/TitleH2";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ReviewSection = () => {
 const [cardToRender, setCardToRender] = useState(0);
 function nextCard() {
  setCardToRender((prev) => (prev === 4 ? 0 : prev + 1));
 }
 function prevCard() {
  setCardToRender((prev) => (prev === 0 ? 4 : prev - 1));
 }
 return (
  <section className="contain mt-24 pb-6">
   <TitleH2 title="Customer Reviews" />
   <div className="grid [grid-template-rows:1fr] [grid-template-columns:1fr] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative">
    <button
     onClick={prevCard}
     className="absolute -bottom-2 -left-3 bg-background p-1 rounded-full border z-[1] sm:hidden opacity-80 focus-visible:opacity-100"
    >
     <ArrowLeft />
    </button>
    {Array.from({ length: 5 }, (_, i) => (
     <ReviewCard
      key={i}
      i={i}
      className={cn(
       cardToRender === i
        ? "opacity-100 [grid-row:1] [grid-column:1] sm:[grid-row:auto] sm:[grid-column:auto]"
        : "opacity-0 sm:opacity-100 [grid-row:1] [grid-column:1] sm:[grid-row:auto] sm:[grid-column:auto]"
      )}
     />
    ))}
    <button
     onClick={nextCard}
     className="absolute -bottom-2 -right-3 bg-background p-1 rounded-full border z-[1] sm:hidden opacity-80 focus-visible:opacity-100"
    >
     <ArrowRight />
    </button>
   </div>
  </section>
 );
};
export default ReviewSection;
