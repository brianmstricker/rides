"use client";
import Carousel from "@/components/global/Carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ListingType } from "@/types";

const ListingModal = ({
 listingClicked: listing,
 setModalOpen,
 setListingClicked,
}: {
 listingClicked: ListingType | null;
 setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
 setListingClicked: React.Dispatch<React.SetStateAction<ListingType | null>>;
}) => {
 return (
  <Dialog
   defaultOpen
   open
   onOpenChange={() => {
    setListingClicked(null);
    setModalOpen(false);
   }}
  >
   <DialogContent className="max-w-7xl">
    <DialogHeader>
     <DialogTitle className="uppercase">
      {listing?.brand} {listing?.model}
     </DialogTitle>
    </DialogHeader>
    <Carousel data={listing?.images} />
    <div>test</div>
   </DialogContent>
  </Dialog>
 );
};
export default ListingModal;
