import car1 from "@/assets/camry.jpg";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight, LucideProps } from "lucide-react";

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
 return (
  <div className="fadeInCard">
   <div className="relative w-full h-52 min-[500px]:h-40">
    <Image src={image} alt={title} fill className="object-cover rounded-t-md" />
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
  </div>
 );
};
export default PopularSectionCard;
