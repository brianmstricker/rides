import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const SelectedImageModal = ({
 selectedImageForModal,
 setSelectedImageForModal,
 selectedImageAspectRatio,
 setSelectedImageAspectRatio,
}: {
 selectedImageForModal: Blob | MediaSource;
 setSelectedImageForModal: React.Dispatch<React.SetStateAction<File | null>>;
 selectedImageAspectRatio: number | null;
 setSelectedImageAspectRatio: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
 // todo: add navigation buttons to cycle through images, close button
 useEffect(() => {
  if (!selectedImageForModal) return;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  return () => {
   document.body.style.overflow = "auto";
   document.body.style.paddingRight = "";
  };
 }, [selectedImageForModal]);
 return (
  <div
   className="fixed flex justify-center items-center overflow-hidden inset-0 z-50 bg-black/80"
   onClick={() => setSelectedImageForModal(null)}
  >
   <div onClick={(e) => e.stopPropagation()}>
    <Image
     src={URL.createObjectURL(selectedImageForModal)}
     alt=""
     onLoad={(e: any) => {
      const width = e.target.naturalWidth;
      const height = e.target.naturalHeight;
      setSelectedImageAspectRatio(width / height);
     }}
     style={{ maxWidth: "90vw", maxHeight: "90vh", aspectRatio: `${selectedImageAspectRatio || 1}/1` }}
     className={cn("border-2 overflow-hidden", !selectedImageAspectRatio && "opacity-0")}
    />
   </div>
  </div>
 );
};
export default SelectedImageModal;
