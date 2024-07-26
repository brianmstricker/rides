import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const ReviewCard = ({ i, className }: { i: number; className?: string }) => {
 let classes = "";
 let description = "";
 switch (i) {
  case 0:
   classes = "md:translate-y-6 order-2 md:order-none";
   description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec id felis eget libero ultricies aliquet. Donec id felis eget libero ultricies aliquet.";
   break;
  case 1:
   classes =
    "relative before:absolute before:border-yellow-600 before:border before:bg-background before:inset-0 before:z-[-1] before:-bottom-2 bg-background before:-left-2 before:mt-2 before:mr-2 sm:ml-2 order-1 md:order-none before:opacity-0 sm:before:opacity-100";
   description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
   break;
  case 2:
   classes = "md:translate-y-6 order-3 md:order-none";
   description = "Sed ut purus eget nunc. Donec id felis eget libero ultricies aliquet. Donec id felis eget libero ultricies aliquet.";
   break;
  case 3:
   classes =
    "flex flex-col md:hidden lg:flex relative before:absolute before:border-yellow-600 before:border before:bg-background before:inset-0 before:z-[-1] before:-bottom-2 bg-background before:-left-2 before:mt-2 before:mr-2 sm:ml-2 order-4 md:order-none before:opacity-0 sm:before:opacity-100";
   description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
   break;
  case 4:
   classes = "flex flex-col sm:hidden xl:flex md:translate-y-6";
   description = "Sed ut purus eget nunc. Donec id felis eget libero ultricies aliquet. Donec id felis eget libero ultricies aliquet.";
   break;
 }
 return (
  <div className={cn("border px-3 lg:px-4 py-3 flex flex-col", classes, className)}>
   <div className="flex gap-3">
    {Array.from({ length: 5 }, (_, i) => (
     <Star size={26} fill="#eab308" className="text-yellow-500" key={i} />
    ))}
   </div>
   <p className="my-4">{description}</p>
   <div className="flex items-center mt-auto">
    <div className="w-10 h-10 bg-red-600 rounded-full" />
    <div className="ml-4">
     <h4 className="font-semibold">John Doe</h4>
     <p className="text-sm text-gray-500">CEO, Company</p>
    </div>
   </div>
  </div>
 );
};
export default ReviewCard;
