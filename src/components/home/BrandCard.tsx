import Image from "next/image";
import audiLogo from "@/assets/audi-logo.png";

const BrandCard = () => {
 return (
  <div className="border px-4 py-2 rounded-md shadow">
   <div className="relative w-20 h-20 mx-auto">
    <Image src={audiLogo} alt="audi" layout="fill" objectFit="contain" />
   </div>
   <h3 className="text-center font-bold text-xl">Audi</h3>
  </div>
 );
};
export default BrandCard;
