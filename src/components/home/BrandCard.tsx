import Image from "next/image";
import audiLogo from "@/assets/audi-logo.png";

const BrandCard = () => {
 return (
  <div
   tabIndex={0}
   className="border px-4 py-2 rounded-md shadow shadow-foreground/10 dark:shadow-foreground/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 focus-visible:shadow-lg focus-visible:scale-105 outline-none focus-visible:ring ring-foreground/20 focus-visible:border-transparent"
  >
   <div className="relative w-20 h-20 mx-auto">
    <Image src={audiLogo} alt="audi" layout="fill" objectFit="contain" />
   </div>
   <h3 className="text-center font-bold text-2xl sm:text-lg md:text-2xl">Audi</h3>
  </div>
 );
};
export default BrandCard;
