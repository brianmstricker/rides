"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Input } from "../ui/input";

const Carousel = ({ data, desc }: { data: string[] | undefined | null; desc: string }) => {
 const [current, setCurrent] = useState(0);
 const [showGoToImage, setShowGoToImage] = useState(false);
 const handleLeft = useCallback(() => {
  if (!data) return;
  setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
 }, [data]);
 const handleRight = useCallback(() => {
  if (!data) return;
  setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
 }, [data]);
 if (!data || data.length === 0) return null;
 return (
  <div className="flex relative items-center overflow-hidden">
   <button
    className="group absolute left-1 sm:left-3 z-10 rounded-full bg-background p-1 hover:scale-105 focus-visible:scale-105 transition-transform duration-200"
    onClick={handleLeft}
    aria-label="Previous Image"
   >
    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-[2px] transition-transform duration-200 group-focus-visible:-translate-x-[2px]" />
   </button>
   <div
    className="flex w-full transition-all duration-300 ease-in-out aspect-[0.75/1] min-[400px]:aspect-[1] sm:aspect-[2.5/1]"
    style={{ transform: `translateX(-${current * 100}%)` }}
   >
    {data.map((image, i) => (
     <Image
      key={image}
      alt={desc + " Image " + (i + 1)}
      width={1800}
      height={800}
      src={image}
      className="aspect-[0.75/1] min-[400px]:aspect-[1] sm:aspect-[2.5/1] transition-opacity duration-500 ease-in-out"
      placeholder="empty"
      style={{
       opacity: i === current ? 1 : 0,
      }}
      loading="eager"
     />
    ))}
   </div>
   <button
    className="group absolute right-1 sm:right-3 z-10 rounded-full bg-background p-1 hover:scale-105 focus-visible:scale-105 transition-transform duration-200"
    onClick={handleRight}
    aria-label="Next Image"
   >
    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-[2px] transition-transform duration-200 group-focus-visible:translate-x-[2px]" />
   </button>
   <button
    className="absolute bottom-1 right-1 sm:right-3 z-10 text-white text-sm sm:text-base bg-black p-1 rounded"
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
 );
};
export default Carousel;
