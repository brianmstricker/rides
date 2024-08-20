import { Car, Caravan, CarFront, Flag, Gauge, Rabbit, Truck, Zap } from "lucide-react";
import TypeCard from "./TypeCard";

const BrowseByType = () => {
 return (
  <div className="mt-4">
   <h2 className="text-center text-xl sm:text-2xl font-medium">Browse by type</h2>
   <div className="flex flex-col sm:flex-row mt-4 gap-4 justify-center items-center">
    <div className="flex gap-4">
     <TypeCard label="Electric" icon={Zap} />
     <TypeCard label="SUV" icon={Car} />
     <TypeCard label="Pickup" icon={Truck} />
    </div>
    <div className="flex gap-4">
     <TypeCard label="Van" icon={Caravan} />
     <TypeCard label="Coupe" icon={CarFront} />
     <TypeCard label="Sport" icon={Flag} />
    </div>
   </div>
  </div>
 );
};
export default BrowseByType;
