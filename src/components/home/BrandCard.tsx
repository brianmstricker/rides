import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

const BrandCard = ({ text, logo, imgSize }: { text: string; logo: StaticImageData; imgSize?: string }) => {
 return (
  <div
   tabIndex={0}
   className="border px-4 py-2 rounded-md shadow shadow-foreground/10 dark:shadow-foreground/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 focus-visible:shadow-lg focus-visible:scale-105 outline-none focus-visible:ring ring-foreground/20 focus-visible:border-transparent flex flex-col items-center max-h-[140px]"
  >
   <Image src={logo} alt="audi" className={cn("object-contain w-20 h-20 my-auto", imgSize)} sizes="80px" />
   <h3 className="mt-2 text-center font-bold text-2xl sm:text-lg md:text-2xl">{text}</h3>
  </div>
 );
};
export default BrandCard;
