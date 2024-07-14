import { Car } from "lucide-react";

const TypeCard = () => {
 return (
  <div className="border border-border/10 dark:border-border bg-white/15 dark:bg-black/80 rounded-md p-2 min-w-[75px]">
   <Car size={40} className="mx-auto" />
   <div className="text-center">SUV</div>
  </div>
 );
};
export default TypeCard;
