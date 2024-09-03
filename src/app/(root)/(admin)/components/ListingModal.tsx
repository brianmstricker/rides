"use client";
import Carousel from "@/components/global/Carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ListingType, UserType } from "@/types";
import dayjs from "dayjs";
import { featuresList } from "../../sell/FeaturesModal";
import React, { ForwardRefExoticComponent, RefAttributes, useCallback, useEffect, useMemo, useState } from "react";
import { Check, CheckSquare, LucideProps, Pencil, X } from "lucide-react";

const ListingModal = ({
 listingClicked: listing,
 setModalOpen,
 setListingClicked,
}: {
 listingClicked: ListingType | null;
 setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
 setListingClicked: React.Dispatch<React.SetStateAction<ListingType | null>>;
}) => {
 // todo: add edit feature
 const [customFeatures, setCustomFeatures] = useState<Set<string>>(new Set());
 const carNameAndModel = useMemo(() => listing?.brand + " " + listing?.model, [listing]);
 const featureIcons = useMemo(() => {
  const icons: { [key: string]: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | undefined } = {};
  featuresList.forEach((feature) => {
   icons[feature.text] = feature.icon;
  });
  return icons;
 }, []);
 useEffect(() => {
  if (listing?.features) {
   const newCustomFeatures = new Set<string>();
   listing.features.forEach((feature) => {
    if (!featureIcons[feature]) {
     newCustomFeatures.add(feature);
    }
   });
   setCustomFeatures(newCustomFeatures);
  }
 }, [listing?.features, featureIcons]);
 // console.log(listing);
 return (
  <Dialog
   defaultOpen
   open
   onOpenChange={() => {
    setListingClicked(null);
    setModalOpen(false);
   }}
  >
   <DialogContent className="max-w-7xl sm:max-h-[90vh] h-full border-r-4 border-r-transparent border-y-4 border-y-transparent">
    <DialogHeader>
     <DialogTitle />
    </DialogHeader>
    <div>
     <div className="flex items-center justify-between">
      <div className="flex gap-3">
       <button className="w-7 h-7 border flex items-center justify-center rounded-md relative group">
        <span className="absolute text-xs -top-5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-focus-visible:opacity-100 whitespace-nowrap">
         Approve
        </span>
        <Check className="text-green-600" />
       </button>
       <button className="w-7 h-7 border flex items-center justify-center rounded-md relative group">
        <span className="absolute text-xs -top-5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-focus-visible:opacity-100 whitespace-nowrap">
         Edit
        </span>
        <Pencil size={20} className="text-gray-600" />
       </button>
       <button className="w-7 h-7 border flex items-center justify-center rounded-md relative group">
        <span className="absolute text-xs -top-5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-focus-visible:opacity-100 whitespace-nowrap">
         Block
        </span>
        <X className="text-red-600" />
       </button>
      </div>
      <div className="text-xs font-bold">*ADMIN VIEW*</div>
     </div>
     <Carousel data={listing?.images} desc={carNameAndModel} />
     <div className="relative">
      <div className="capitalize text-xs sm:text-sm leading-3 border w-fit py-0.5 px-1">{listing?.condition}</div>
      <div className="sm:text-lg uppercase">
       {listing?.year} {carNameAndModel}
      </div>
      <div>{listing?.mileage && new Intl.NumberFormat().format(Number(listing?.mileage)) + " mi."}</div>
      <div className="mt-4 text-3xl sm:text-4xl font-bold">${new Intl.NumberFormat().format(Number(listing?.price))}</div>
      <div className="mt-4 sm:absolute sm:right-0 sm:top-0 sm:border sm:px-6 sm:py-1 sm:mt-0">
       <div className="sm:sticky top-0">
        <div className="text-2xl sm:text-3xl font-semibold mb-2">Seller Info</div>
        <div>Sold by: {listing?.userId.username}</div>
        <div>{listing?.seller_location}</div>
        <div>Listed on {dayjs(listing?.createdAt).format("MMM D, YYYY")}</div>
       </div>
      </div>
      <div className="mt-4">
       <div className="text-2xl sm:text-3xl font-semibold mb-2">Basic</div>
       <div>
        <span className="font-bold mr-1">Year:</span>
        <span>{listing?.year}</span>
       </div>
       <div>
        <span className="font-bold mr-1">Brand:</span>
        <span className="capitalize">{listing?.brand}</span>
       </div>
       <div>
        <span className="font-bold mr-1">Model:</span>
        <span className="capitalize">{listing?.model}</span>
       </div>
       <div>
        <span className="font-bold mr-1">Exterior Color:</span>
        <span className="capitalize">{listing?.exterior_color}</span>
        <div className="w-3.5 h-3.5 rounded-full border inline-block ml-1" style={{ backgroundColor: listing?.exterior_color }} />
       </div>
       <div>
        <span className="font-bold mr-1">Interior Color:</span>
        <span className="capitalize">{listing?.interior_color}</span>
        <div
         className="w-3.5 h-3.5 rounded-full border inline-block ml-1"
         style={{ backgroundColor: listing?.interior_color ? listing.interior_color : "" }}
        />
       </div>
       {listing?.drivetrain && (
        <div>
         <span className="font-bold mr-1">Drivetrain:</span>
         <span className="capitalize">{listing.drivetrain}</span>
        </div>
       )}
       {listing?.engine && (
        <div>
         <span className="font-bold mr-1">Engine:</span>
         <span className="capitalize">{listing.engine}</span>
        </div>
       )}
       {listing?.transmission && (
        <div>
         <span className="font-bold mr-1">Transmission:</span>
         <span className="capitalize">{listing.transmission}</span>
        </div>
       )}
       {listing?.fuel_type && (
        <div>
         <span className="font-bold mr-1">Fuel type:</span>
         <span className="capitalize">{listing.fuel_type}</span>
        </div>
       )}
       {listing?.mpg && listing.mpg > 0 ? (
        <div>
         <span className="font-bold mr-1">Mpg:</span>
         <span className="capitalize">{listing.mpg}</span>
        </div>
       ) : null}
       {listing?.mileage && (
        <div>
         <span className="font-bold mr-1">Mileage:</span>
         <span className="capitalize">{listing.mileage}</span>
        </div>
       )}
      </div>
      {listing?.features && listing.features.length > 0 ? (
       <div className="mt-4">
        <div className="text-2xl sm:text-3xl font-semibold mb-2">Features</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
         {listing.features.map((feature, i) => (
          <div key={i} className="flex gap-2 items-center">
           {featureIcons[feature] && React.createElement(featureIcons[feature], { className: "w-6 h-6" })}
           {featureIcons[feature] && <span className="capitalize">{feature}</span>}
          </div>
         ))}
        </div>
        {customFeatures && customFeatures.size > 0 && (
         <div className="sm:mt-1">
          <div className="font-semibold mb-2">Additional Features</div>
          {[...customFeatures].map((feature, i) => (
           <div key={i} className="inline">
            <span className="capitalize">
             {i !== 0 && ", "}
             {feature}
            </span>
           </div>
          ))}
         </div>
        )}
       </div>
      ) : null}
      {listing?.description && (
       <div className="mt-4">
        <div className="text-2xl sm:text-3xl font-semibold mb-2">Description</div>
        <div>{listing.description}</div>
       </div>
      )}
     </div>
    </div>
   </DialogContent>
  </Dialog>
 );
};
export default ListingModal;
