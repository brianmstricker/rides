import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const FeaturesModal = ({ setShowFeaturesModal }: { setShowFeaturesModal: (value: boolean) => void }) => {
 return (
  <Dialog defaultOpen onOpenChange={() => setShowFeaturesModal(false)}>
   <DialogContent className="sm:max-w-[425px]" onPointerDownOutside={(e) => e.preventDefault()}>
    <DialogHeader>
     <DialogTitle>Features</DialogTitle>
     <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
    </DialogHeader>
    <div>here</div>
    <DialogFooter>
     <button>Save changes</button>
    </DialogFooter>
   </DialogContent>
  </Dialog>
 );
};
export default FeaturesModal;
