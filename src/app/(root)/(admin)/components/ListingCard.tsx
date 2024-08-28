"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListingType } from "@/models/Listing";
import { Eye } from "lucide-react";
import Image from "next/image";

const ListingCard = ({ listings }: { listings: (Partial<ListingType> & { _id: string; userId: { username: string } })[] }) => {
 // todo: modal
 return (
  <Card>
   <CardHeader>
    <CardTitle className="text-2xl">Recent Listings</CardTitle>
   </CardHeader>
   <CardContent>
    <div>
     {listings.map((listing) => (
      <div
       key={listing._id}
       className="flex flex-col sm:flex-row gap-4 p-3 bg-primary-foreground rounded-md grow sm:items-center relative border group cursor-pointer"
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
       <div className="overflow-hidden">
        <div className="flex items-center">
         <div className="uppercase font-bold truncate">
          {listing.brand} ({listing.model})
         </div>
         {/* <div className="w-1 h-1 bg-foreground mx-1 rounded-full" />
         <div>${new Intl.NumberFormat().format(Number(listing.price))}</div>
         <div className="w-1 h-1 bg-foreground mx-1 rounded-full" />
         <div>{listing.seller_location}</div> */}
        </div>
        <div className="truncate">Posted by {listing.userId?.username}</div>
       </div>
       <div className="absolute sm:static sm:ml-auto top-1/2 -translate-y-1/2 right-4 sm:translate-y-0 text-muted-foreground group-hover:text-ring transition-colors duration-200">
        <Eye />
       </div>
      </div>
     ))}
    </div>
   </CardContent>
  </Card>
 );
};
export default ListingCard;
