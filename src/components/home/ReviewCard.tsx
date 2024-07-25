import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const ReviewCard = ({ className }: { className?: string }) => {
 return (
  <div className={cn("border px-4 py-3", className)}>
   <div className="flex gap-3">
    {Array.from({ length: 5 }, (_, i) => (
     <Star size={26} fill="#eab308" className="text-yellow-500" key={i} />
    ))}
   </div>
   <p className="my-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, repellat quo corrupti eos veniam maiores esse optio mollitia nostrum rem
    numquam, voluptatibus ad est facilis quia voluptates eaque doloremque corporis consectetur dignissimos facere nulla ducimus.
   </p>
   <div className="flex items-center">
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
