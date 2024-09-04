"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Eye, LoaderPinwheel, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ListingModal from "./ListingModal";
import { ListingType, UserType } from "@/types";

const UserCard = ({ users }: { users: UserType[] }) => {
 return (
  <>
   <Card>
    <CardHeader>
     <CardTitle className="text-2xl">Recent Users</CardTitle>
    </CardHeader>
    <CardContent>
     <div>
      {users.map((user) => (
       <button
        key={user._id}
        className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-3 bg-primary-foreground rounded-md grow sm:items-center relative border group cursor-pointer w-full hover:border-foreground/25 transition-[border] duration-200"
       >
        {/* <div className="shrink-0">
         {listing.images && listing.images.length > 0 && (
          <Image
           src={listing.images[0]}
           alt={listing.model ? listing.model : ""}
           width={90}
           height={40}
           className="aspect-video object-cover rounded-md"
          />
         )}
        </div> */}
        <div className="overflow-hidden text-sm sm:text-base">
         <div className="flex truncate">{user.username}</div>
        </div>
        {/* <div className="absolute sm:static sm:ml-auto top-1/2 -translate-y-1/2 right-4 sm:translate-y-0 text-muted-foreground flex flex-col sm:flex-row gap-2.5 items-center">
         <Eye className="group-hover:text-ring transition-colors duration-200" />
        </div> */}
       </button>
      ))}
     </div>
    </CardContent>
   </Card>
  </>
 );
};
export default UserCard;
