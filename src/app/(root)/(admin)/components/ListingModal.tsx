"use client";
import Carousel from "@/components/global/Carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ListingType, UserType } from "@/types";

const ListingModal = ({
 listingClicked: listing,
 setModalOpen,
 setListingClicked,
}: {
 listingClicked: ListingType | null;
 setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
 setListingClicked: React.Dispatch<React.SetStateAction<ListingType | null>>;
}) => {
 const carNameAndModel = `${listing?.brand?.toLocaleUpperCase()} ${listing?.model?.toLocaleUpperCase()}`;
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
   <DialogContent className="max-w-7xl sm:max-h-[90vh] overflow-y-auto">
    <DialogHeader>
     <DialogTitle />
    </DialogHeader>
    <div className="-mt-4">
     <Carousel data={listing?.images} desc={carNameAndModel} />
     <div>
      <div className="capitalize text-xs sm:text-sm leading-3">{listing?.condition}</div>
      <div className="sm:text-lg">
       {listing?.year} {carNameAndModel}
      </div>
      <div>{listing?.mileage && new Intl.NumberFormat().format(Number(listing?.mileage)) + " mi."}</div>
      <div className="mt-3 text-3xl sm:text-4xl font-bold">${new Intl.NumberFormat().format(Number(listing?.price))}</div>
      <div className="mt-3">
       <div className="text-2xl sm:text-3xl font-semibold">Seller Info</div>
       <div>Sold by: {listing?.userId.username}</div>
       <div>{listing?.seller_location}</div>
      </div>
      <div className="mt-3">
       <div className="text-2xl sm:text-3xl font-semibold">Basic</div>
      </div>
     </div>
    </div>
   </DialogContent>
  </Dialog>
 );
};
export default ListingModal;
