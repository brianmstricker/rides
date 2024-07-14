import car1 from "@/assets/camry.jpg";
import Image from "next/image";
import { ArrowUpRight, LucideProps } from "lucide-react";

const PopularSectionCard = ({
 title,
 price,
 stats,
}: {
 title: string;
 price: string;
 stats: {
  icon: React.ComponentType<LucideProps>;
  text: string;
 }[];
}) => {
 return (
  <div>
   <div className="relative w-full h-40">
    <Image src={car1} alt="car" fill className="object-cover rounded-t-md" />
   </div>
   <div className="p-2 bg-primary-foreground border rounded-b-md">
    <h3 className="font-bold text-2xl">{title}</h3>
    <div className="mt-4 flex justify-between text-[15px]">
     {stats.map((stat) => (
      <div className="flex flex-col items-center gap-1">
       <stat.icon size={22} />
       <div>{stat.text}</div>
      </div>
     ))}
    </div>
    <div className="mt-4 flex justify-between items-end whitespace-nowrap">
     <div className="text-xs items-center gap-[2px] hidden min-[490px]:flex">
      <span className="w-min">View more</span>
      <ArrowUpRight size={20} />
     </div>
     <div className="mt-auto ml-auto">
      <span className="text-xs">from</span> <span className="font-bold text-xl">${price}</span>
     </div>
    </div>
   </div>
  </div>
 );
};
export default PopularSectionCard;
