"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ListingType } from "@/models/Listing";

const ListingModal = ({
 listingClicked: listing,
 setModalOpen,
 setListingClicked,
}: {
 listingClicked: (Partial<ListingType> & { _id: string; userId: { username: string } }) | null;
 setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
 setListingClicked: React.Dispatch<React.SetStateAction<(Partial<ListingType> & { _id: string; userId: { username: string } }) | null>>;
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
   <DialogContent>
    <DialogHeader>
     <DialogTitle className="uppercase">
      {listing?.brand} {listing?.model}
     </DialogTitle>
    </DialogHeader>
    <div>images here</div>
    <div>test</div>
   </DialogContent>
  </Dialog>
 );
};
export default ListingModal;
