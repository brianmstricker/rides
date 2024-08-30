"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const Carousel = ({ data }: { data: string[] | undefined | null }) => {
 const [current, setCurrent] = useState(0);
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
   >
    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-[2px] transition-transform duration-200 group-focus-visible:-translate-x-[2px]" />
   </button>
   <div
    className="flex w-full transition-all duration-300 ease-in-out aspect-[0.75/1] min-[400px]:aspect-[1] sm:aspect-[2.5/1]"
    style={{ transform: `translateX(-${current * 100}%)` }}
   >
    {data.map((image) => (
     <Image
      key={image}
      alt=""
      width={1800}
      height={800}
      src={image}
      className="aspect-[0.75/1] min-[400px]:aspect-[1] sm:aspect-[2.5/1]"
      placeholder="empty"
     />
    ))}
   </div>
   <button
    className="group absolute right-1 sm:right-3 z-10 rounded-full bg-background p-1 hover:scale-105 focus-visible:scale-105 transition-transform duration-200"
    onClick={handleRight}
   >
    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-[2px] transition-transform duration-200 group-focus-visible:translate-x-[2px]" />
   </button>
  </div>
 );
};
export default Carousel;
