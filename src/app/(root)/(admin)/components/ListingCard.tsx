"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Eye, LoaderPinwheel, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ListingModal from "./ListingModal";
import { ListingType } from "@/types";

const ListingCard = ({ listings }: { listings: ListingType[] }) => {
 const [modalOpen, setModalOpen] = useState(false);
 const [listingClicked, setListingClicked] = useState<ListingType | null>(null);
 const handleListingClick = (listing: ListingType) => {
  setListingClicked(listing);
  setModalOpen(true);
 };
 return (
  <>
   <Card>
    <CardHeader>
     <CardTitle className="text-2xl">Recent Listings</CardTitle>
    </CardHeader>
    <CardContent>
     <div>
      {listings.map((listing) => (
       <button
        key={listing._id}
        className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-3 bg-primary-foreground rounded-md grow sm:items-center relative border group cursor-pointer w-full hover:border-foreground/25 transition-[border] duration-200"
        onClick={() => handleListingClick(listing)}
       >
        <div className="shrink-0">
         {listing.images && listing.images.length > 0 && (
          <Image
           src={listing.images[0]}
           alt={listing.model ? listing.model : ""}
           width={90}
           height={40}
           className="aspect-video object-cover rounded-md"
          />
         )}
        </div>
        <div className="overflow-hidden text-sm sm:text-base">
         <div className="flex items-center">
          <div className="uppercase font-bold truncate">
           {listing.brand} ({listing.model})
          </div>
          {/* <div className="w-1 h-1 bg-foreground mx-1 rounded-full" />
         <div>${new Intl.NumberFormat().format(Number(listing.price))}</div>
         <div className="w-1 h-1 bg-foreground mx-1 rounded-full" />
         <div>{listing.seller_location}</div> */}
         </div>
         <div className="flex truncate">Posted by {listing.userId?.username}</div>
        </div>
        <div className="absolute sm:static sm:ml-auto top-1/2 -translate-y-1/2 right-4 sm:translate-y-0 text-muted-foreground flex flex-col sm:flex-row gap-2.5 items-center">
         <div className="relative icon">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 [.icon:hover_&]:opacity-100 pointer-events-none duration-200 py-1 px-2 bg-background rounded-md text-foreground">
           {listing.is_active === "waiting" && "Pending"}
           {listing.is_active === "blocked" && "Blocked"}
           {listing.is_active === "active" && "Active"}
          </span>
          {listing.is_active === "waiting" && <LoaderPinwheel className="text-yellow-500" />}
          {listing.is_active === "blocked" && <X className="text-red-500" />}
          {listing.is_active === "active" && <Check className="text-green-500" />}
         </div>
         <Eye className="group-hover:text-ring transition-colors duration-200" />
        </div>
       </button>
      ))}
     </div>
    </CardContent>
   </Card>
   {modalOpen && <ListingModal listingClicked={listingClicked} setModalOpen={setModalOpen} setListingClicked={setListingClicked} />}
  </>
 );
};
export default ListingCard;
