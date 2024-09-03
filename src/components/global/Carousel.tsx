"use client";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const Carousel = ({ data, desc }: { data: string[] | undefined | null; desc: string }) => {
 // todo: add swipe gesture for mobile, and on screen resize update scrollRef
 const [current, setCurrent] = useState(0);
 const [showGoToImage, setShowGoToImage] = useState(false);
 const scrollRef = useRef<HTMLDivElement>(null);
 const handleLeft = useCallback(
  (i: number) => {
   if (!data) return;
   setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
   if (scrollRef.current) {
    i === 0 ? (scrollRef.current.scrollLeft = scrollRef.current.scrollWidth) : (scrollRef.current.scrollLeft -= 70);
   }
  },
  [data]
 );
 const handleRight = useCallback(
  (i: number) => {
   if (!data) return;
   setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
   if (scrollRef.current) {
    i === data.length - 1 ? (scrollRef.current.scrollLeft = 0) : (scrollRef.current.scrollLeft += 70);
   }
  },
  [data]
 );
 if (!data || data.length === 0) return null;
 return (
  <div>
   <div className="flex relative items-center overflow-hidden">
    <button
     className="group absolute left-1 sm:left-3 z-10 rounded-full bg-black/90 p-1 hover:scale-105 focus-visible:scale-105 transition-transform duration-200"
     onClick={() => handleLeft(current)}
     aria-label="Previous Image"
    >
     <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-[1.5px] transition-transform duration-200 group-focus-visible:-translate-x-[1.5px] text-white" />
    </button>
    <div
     className="flex w-full transition-transform duration-300 ease-in-out aspect-[2.75/3] min-[400px]:aspect-[1] min-[485px]:aspect-[1.5/1] md:aspect-[2.5/1]"
     style={{ transform: `translateX(-${current * 100}%)` }}
    >
     {data.map((image, i) => (
      <Image
       key={image}
       alt={desc + " Image " + (i + 1)}
       width={1800}
       height={800}
       src={image}
       className="aspect-[2.75/3] min-[400px]:aspect-[1] min-[485px]:aspect-[1.5/1] md:aspect-[2.5/1] transition-opacity duration-500 ease-in-out object-contain"
       placeholder="empty"
       style={{
        opacity: i === current ? 1 : 0,
       }}
       loading="eager"
       aria-hidden={i !== current}
      />
     ))}
    </div>
    <button
     className="group absolute right-1 sm:right-3 z-10 rounded-full bg-black/90 p-1 hover:scale-105 focus-visible:scale-105 transition-transform duration-200"
     onClick={() => handleRight(current)}
     aria-label="Next Image"
    >
     <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-[1.5px] transition-transform duration-200 group-focus-visible:translate-x-[1.5px] text-white" />
    </button>
    <button
     className="absolute bottom-1 right-1 sm:right-3 z-10 text-white text-sm sm:text-base bg-black/90 p-1 rounded"
     onClick={() => setShowGoToImage((prev) => !prev)}
    >
     {!showGoToImage ? (
      <span>{current + 1}</span>
     ) : (
      <input
       onClick={(e) => e.stopPropagation()}
       className="text-sm sm:text-base inline-flex items-center justify-center w-8 pl-1.5 focus:outline focus:outline-white/50 bg-transparent text-white mx-0.5"
       autoFocus
       onChange={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""))}
       onKeyDown={(e) => {
        if (e.key === "Enter") {
         const num = parseInt(e.currentTarget.value);
         if (num > 0 && num <= data.length) setCurrent(num - 1);
         setShowGoToImage(false);
        }
       }}
       onBlur={() => setShowGoToImage(false)}
      />
     )}
     /{data.length}
    </button>
   </div>
   <div className="overflow-hidden h-[100px]">
    <div
     ref={scrollRef}
     style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
     className="w-fit h-fit mx-auto mt-4 flex max-w-[75vw] sm:max-w-lg gap-1.5 overflow-x-auto px-1 pt-1 scroll-px-1 pb-20"
    >
     {data.map((_, i) => (
      <button
       key={i}
       className={cn(
        "relative shrink-0 w-16 h-16 bg-black/90 hover:bg-black/80 focus:bg-black/80 transition-colors duration-200",
        i === current && "ring-2 ring-mainPurple"
       )}
       onClick={() => {
        setCurrent(i);
        if (scrollRef.current) {
         if (i === current + 1) scrollRef.current.scrollLeft += 70;
         if (i === current - 1) scrollRef.current.scrollLeft -= 70;
         if (i < current - 1) scrollRef.current.scrollLeft -= 120;
         if (i > current + 1) scrollRef.current.scrollLeft += 120;
        }
       }}
      >
       <Image
        alt={desc + " Image " + (i + 1)}
        fill
        sizes="64px"
        src={data[i]}
        className={cn("aspect-[1/1] object-cover", i !== current && "opacity-65")}
        placeholder="empty"
        loading="eager"
       />
      </button>
     ))}
    </div>
   </div>
  </div>
 );
};
export default Carousel;
