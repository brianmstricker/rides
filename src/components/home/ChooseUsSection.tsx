import ChooseUsCard from "@/components/home/ChooseUsCard";
import { CheckCircle, CircleDollarSign, CircleHelp, MousePointer2 } from "lucide-react";

const ChooseUsSection = () => {
 return (
  <section className="contain mt-20">
   <h2 className="text-center text-[7vw] sm:text-4xl font-bold">Why Choose Us?</h2>
   <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
    <ChooseUsCard
     title="Convenience"
     icon={CheckCircle}
     color="text-green-500"
     description="Enjoy the convenience of browsing and buying vehicles online, right from the comfort of your home."
    />
    <ChooseUsCard
     title="Selection"
     icon={MousePointer2}
     color="text-blue-500"
     description="Discover a wide selection of vehicles, ranging from sedans to SUVs, to find the perfect ride that suits your needs."
    />
    <ChooseUsCard
     title="Pricing"
     icon={CircleDollarSign}
     color="text-yellow-500"
     description="Get competitive pricing on all vehicles, ensuring that you get the best value for your money."
    />
    <ChooseUsCard
     title="Support"
     icon={CircleHelp}
     color="text-red-500"
     description="Receive support from our AI assistant throughout your car buying journey, whenever you need it."
    />
   </div>
   {/* <div className="grid grid-cols-2 gap-10">
     <div className="bg-blue-200 dark:bg-blue-400 h-64 rounded-md p-4 flex items-end">
      <h2 className="">Looking to sell your vehicle?</h2>
     </div>
     <div className="bg-red-200 dark:bg-red-400 h-64 rounded-md p-4">2</div>
    </div> */}
  </section>
 );
};
export default ChooseUsSection;
