"use client";
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
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

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

const FeaturesModal = ({
 setShowFeaturesModal,
 customFeatures,
 setCustomFeatures,
 features,
 setFeatures,
 customFeatureInput,
 setCustomFeatureInput,
 featuresButtonRef,
 descriptionTextareaRef,
}: {
 setShowFeaturesModal: (value: boolean) => void;
 customFeatures: string[];
 setCustomFeatures: Dispatch<SetStateAction<string[]>>;
 features: string[];
 setFeatures: Dispatch<SetStateAction<string[]>>;
 customFeatureInput: string;
 setCustomFeatureInput: Dispatch<SetStateAction<string>>;
 featuresButtonRef: React.RefObject<HTMLButtonElement>;
 descriptionTextareaRef: React.RefObject<HTMLTextAreaElement>;
}) => {
 // todo: potentially save custom features to local storage
 const previousFeaturesRef = useRef(features);
 const [newlyAddedFeature, setNewlyAddedFeature] = useState<string | null>(null);
 const [previousFeaturesArray, setPreviousFeaturesArray] = useState<string[]>(previousFeaturesRef.current);
 const customInputRef = useRef<HTMLInputElement>(null);
 function addCustomFeature() {
  if (customFeatureInput.trim().length === 0) return;
  if (customFeatureInput.trim().length > 25) {
   toast.error("Custom feature must be 25 characters or less");
   return;
  }
  if (customFeatures.includes(customFeatureInput.trim())) {
   toast.error("Feature already exists");
   return;
  }
  if (customFeatures.length >= 10) {
   toast.error("You can only add up to 10 custom features");
   return;
  }
  setCustomFeatures([...customFeatures, customFeatureInput.trim()]);
  setFeatures([...features, customFeatureInput.trim()]);
  setCustomFeatureInput("");
  customInputRef.current?.focus();
  setNewlyAddedFeature(customFeatureInput);
 }
 function updateFeatures({ close }: { close?: boolean } = {}) {
  let uniqueFeatures = [];
  !close
   ? (uniqueFeatures = [...features, ...customFeatures].filter((f, i, self) => self.indexOf(f) === i))
   : (uniqueFeatures = [...new Set([...previousFeaturesArray, ...customFeatures])]);
  JSON.stringify(previousFeaturesArray) !== JSON.stringify(uniqueFeatures) && toast.success("Features updated");
  setCustomFeatureInput("");
  setFeatures(uniqueFeatures);
  setShowFeaturesModal(false);
  setTimeout(() => {
   featuresButtonRef?.current?.focus();
  }, 0);
 }
 function removeFeature(feature: string) {
  setCustomFeatures(customFeatures.filter((f) => f !== feature));
  setFeatures(features.filter((f) => f !== feature));
  setPreviousFeaturesArray(previousFeaturesArray.filter((f) => f !== feature));
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
 useEffect(() => {
  const featuresButton = featuresButtonRef.current;
  const textarea = descriptionTextareaRef.current;
  if (featuresButton && textarea) {
   textarea.style.height = `${featuresButton.offsetHeight}px`;
  }
 }, [features]);
 return (
  <Dialog
   defaultOpen
   onOpenChange={() => {
    updateFeatures({ close: true });
    featuresButtonRef?.current?.focus();
   }}
  >
   <DialogContent className="max-w-7xl" onPointerDownOutside={(e) => e.preventDefault()}>
    <DialogHeader>
     <DialogTitle>Features</DialogTitle>
    </DialogHeader>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
     {featuresList.map((feature, i) => {
      const Icon = feature.icon;
      return (
       <div key={i} className="py-4 flex items-center gap-4">
        <input
         type="checkbox"
         checked={features.includes(feature.text)}
         onChange={(e) => {
          if (e.target.checked) {
           setFeatures([...features, feature.text]);
          } else {
           setFeatures(features.filter((f) => f !== feature.text));
          }
         }}
        />
        <div className="flex items-center gap-2">
         <Icon className="shrink-0 w-6 h-6" />
         <span className="capitalize">{feature.text}</span>
        </div>
       </div>
      );
     })}
     {customFeatures.map((feature, i) => (
      <div key={i} data-feature={feature} className="py-4 flex items-center gap-4">
       <button type="button" onClick={() => removeFeature(feature)}>
        <CircleX className="w-5 h-5" />
       </button>
       <span className="capitalize">{feature}</span>
      </div>
     ))}
     {customFeatures.length < 10 && (
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
        type="button"
        tabIndex={customFeatureInput.trim().length > 0 ? 0 : -1}
        className={cn(
         "ml-2 text-primary absolute right-2 hover:font-bold px-1",
         customFeatureInput.trim().length > 0
          ? "opacity-100 pointer-events-auto duration-200 transition-opacity"
          : "opacity-0 pointer-events-none duration-0"
        )}
        onClick={addCustomFeature}
       >
        Add
       </button>
      </div>
     )}
    </div>
    <DialogFooter>
     <Button
      type="button"
      onClick={() => {
       updateFeatures();
      }}
     >
      Update features
     </Button>
    </DialogFooter>
   </DialogContent>
  </Dialog>
 );
};
export default FeaturesModal;
