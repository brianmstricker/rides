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
 const carNameAndModel = `${listing?.brand?.toLocaleUpperCase()} ${listing?.model?.toLocaleUpperCase()}`;
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
     <DialogTitle className="uppercase text-2xl leading-5">{carNameAndModel}</DialogTitle>
     <div className="text-sm">
      <div>
       Posted by: <span className="font-medium">{listing?.userId?.username}</span>
      </div>
     </div>
    </DialogHeader>
    <Carousel data={listing?.images} desc={carNameAndModel} />
    <div>test</div>
   </DialogContent>
  </Dialog>
 );
};
export default ListingModal;
