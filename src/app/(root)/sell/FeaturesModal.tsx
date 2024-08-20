import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
 Apple,
 Bluetooth,
 Camera,
 CircleX,
 Eye,
 Flashlight,
 Heater,
 Lightbulb,
 LockKeyholeOpen,
 Navigation,
 ParkingSquare,
 Sun,
 TrafficCone,
 X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const featuresList = [
 { text: "Heated seats", icon: Heater },
 { text: "Sunroof", icon: Sun },
 { text: "Keyless start", icon: LockKeyholeOpen },
 { text: "Bluetooth", icon: Bluetooth },
 { text: "Backup camera", icon: Camera },
 { text: "Navigation system", icon: Navigation },
 { text: "Blindspot monitoring", icon: Eye },
 { text: "Apple CarPlay®", icon: Apple },
 { text: "Stability control", icon: TrafficCone },
 { text: "Auto highbeam", icon: Flashlight },
 { text: "Parking assistance", icon: ParkingSquare },
];

const FeaturesModal = ({ setShowFeaturesModal }: { setShowFeaturesModal: (value: boolean) => void }) => {
 // todo: potentially add custom features to local storage
 const [customFeatures, setCustomFeatures] = useState<string[]>([]);
 const [customFeatureInput, setCustomFeatureInput] = useState("");
 const [newlyAddedFeature, setNewlyAddedFeature] = useState<string | null>(null);
 const customInputRef = useRef<HTMLInputElement>(null);
 function addCustomFeature() {
  if (customFeatureInput.length === 0) return;
  if (customFeatureInput.length > 25) return;
  if (customFeatures.includes(customFeatureInput)) return;
  setCustomFeatures([...customFeatures, customFeatureInput]);
  setCustomFeatureInput("");
  customInputRef.current?.focus();
  setNewlyAddedFeature(customFeatureInput);
 }
 useEffect(() => {
  if (newlyAddedFeature) {
   const element = document.querySelector(`[data-feature="${newlyAddedFeature}"]`);
   if (element) {
    element.scrollIntoView({ behavior: "smooth" });
   }
   setNewlyAddedFeature(null);
  }
 }, [newlyAddedFeature]);
 return (
  <Dialog defaultOpen onOpenChange={() => setShowFeaturesModal(false)}>
   <DialogContent className="max-w-7xl" onPointerDownOutside={(e) => e.preventDefault()}>
    <DialogHeader>
     <DialogTitle>Features</DialogTitle>
    </DialogHeader>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
     {featuresList.map((feature, i) => {
      const Icon = feature.icon;
      return (
       <div key={i} className="py-4 flex items-center gap-4">
        <input type="checkbox" />
        <div className="flex items-center gap-2">
         <Icon className="shrink-0 w-6 h-6" />
         <span className="capitalize">{feature.text}</span>
        </div>
       </div>
      );
     })}
     {customFeatures.map((feature, i) => (
      <div key={i} data-feature={feature} className="py-4 flex items-center gap-4">
       <button type="button" onClick={() => setCustomFeatures((prev) => prev.filter((f) => f !== feature))}>
        <CircleX className="w-5 h-5" />
       </button>
       <span className="capitalize">{feature}</span>
      </div>
     ))}
     <div className="flex items-center py-4 relative">
      <Input
       ref={customInputRef}
       type="text"
       placeholder="Add custom feature"
       value={customFeatureInput}
       onChange={(e) => setCustomFeatureInput(e.target.value)}
       className="pr-14"
       onKeyDown={(e) => {
        if (e.key === "Enter") addCustomFeature();
       }}
       maxLength={25}
      />
      <button
       className={cn(
        "ml-2 text-primary absolute right-2 hover:font-bold px-1",
        customFeatureInput.length > 0
         ? "opacity-100 pointer-events-auto duration-200 transition-opacity"
         : "opacity-0 pointer-events-none duration-0"
       )}
       onClick={addCustomFeature}
      >
       Add
      </button>
     </div>
    </div>
    <DialogFooter>
     <Button>Update features</Button>
    </DialogFooter>
   </DialogContent>
  </Dialog>
 );
};
export default FeaturesModal;
