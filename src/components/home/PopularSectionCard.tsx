"use client";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight, LucideProps } from "lucide-react";
import { InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const PopularSectionCard = ({
 title,
 price,
 image,
 stats,
}: {
 title: string;
 price: string;
 image: StaticImageData;
 stats: {
  icon: React.ComponentType<LucideProps>;
  text: string;
 }[];
}) => {
 // todo: animations, maybe show skeleton loader until image is loaded
 const [isInView, setIsInView] = useState(false);
 const [isImageLoaded, setIsImageLoaded] = useState(false);
 const cardRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const handleScroll = () => {
   if (!cardRef.current) return;
   const cardRect = cardRef.current.getBoundingClientRect();
   const inView = cardRect.left >= 0 && cardRect.right <= window.innerWidth;
   setIsInView(inView);
  };
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();
  return () => {
   window.removeEventListener("scroll", handleScroll);
   window.removeEventListener("resize", handleScroll);
  };
 }, []);
 return (
  <>
   {!isImageLoaded && <Skeleton className="w-[230px] h-[314px] mb-2 block" />}
   <div ref={cardRef} className={cn("min-w-[230px] pb-2", !isImageLoaded && "opacity-0 w-0 h-0 absolute")}>
    <InView as="div" className={cn(!isInView && "opacity-50")} threshold={0.95} onChange={(inView) => setIsInView(inView)}>
     <div className="relative w-full h-40">
      <Image src={image} alt={title} fill className="object-cover rounded-t-md" onLoad={() => setIsImageLoaded(true)} />
     </div>
     <div className="p-2 bg-muted border rounded-b-md">
      <h3 className="font-bold text-2xl">{title}</h3>
      <div className="mt-4 flex justify-between items-baseline text-[15px] gap-2">
       {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
         <stat.icon size={22} />
         <div>{stat.text}</div>
        </div>
       ))}
      </div>
      <div className="mt-4 flex justify-between items-end whitespace-nowrap">
       <div className="text-xs items-center gap-[2px] flex">
        <span className="w-min">View more</span>
        <ArrowUpRight size={20} />
       </div>
       <div className="mt-auto ml-auto">
        <span className="text-xs">from</span> <span className="font-bold text-xl leading-none">${price}</span>
       </div>
      </div>
     </div>
    </InView>
   </div>
  </>
 );
};
export default PopularSectionCard;
