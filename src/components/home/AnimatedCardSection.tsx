import CarCard from "./CarCard";

const AnimatedCardSection = () => {
 return (
  <div className="overflow-hidden fixed left-0 right-0 whitespace-nowrap group before:absolute before:w-28 before:h-full before:left-0 before:z-[2] before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:w-28 after:h-full after:right-0 after:z-[2] after:bg-gradient-to-l after:from-background after:to-transparent">
   <div className="animate-infinite-scroll inline-block group-hover:paused">
    {Array.from({ length: 10 }).map((_, i) => (
     <CarCard key={i} />
    ))}
   </div>
   <div className="animate-infinite-scroll inline-block group-hover:paused" aria-hidden="true">
    {Array.from({ length: 10 }).map((_, i) => (
     <CarCard key={i} />
    ))}
   </div>
  </div>
 );
};
export default AnimatedCardSection;

// hide scrollbar if needed
// overflow-x-scroll box-content pb-6 -mb-6
