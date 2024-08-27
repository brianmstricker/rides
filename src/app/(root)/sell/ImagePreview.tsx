"use client";
import { cn } from "@/lib/utils";
import { ArrowLeftRight, Star, X } from "lucide-react";
import Image from "next/image";
import { memo, SetStateAction, useCallback, useEffect } from "react";

const ImagePreview = memo(
 ({
  setPreviewImages,
  setImagesToUpload,
  previewImages,
  img,
  previewInputRef,
  thumbnail,
  setSelectedImageForModal,
 }: {
  setPreviewImages: React.Dispatch<React.SetStateAction<File[]>>;
  setImagesToUpload: React.Dispatch<SetStateAction<File[]>>;
  previewImages: File[];
  img: File | string;
  previewInputRef: React.RefObject<HTMLInputElement>;
  thumbnail?: boolean;
  setSelectedImageForModal: React.Dispatch<React.SetStateAction<File | null>>;
 }) => {
  const removeImage = useCallback(
   (imgToRemove: File) => {
    const updated = previewImages.filter((image) => image !== imgToRemove);
    setPreviewImages(updated);
    setImagesToUpload(updated);
    if (previewInputRef.current) previewInputRef.current.value = "";
   },
   [previewImages, setImagesToUpload, setPreviewImages, previewInputRef]
  );
  return (
   <div className="relative w-full aspect-square cursor-pointer" onClick={() => setSelectedImageForModal(img as File)}>
    <button
     className="absolute -top-1.5 -right-1.5 p-0.5 bg-background border rounded-full flex items-center justify-center w-5 h-5 z-[2] outline-none hover:bg-input"
     onClick={(e) => {
      e.stopPropagation();
      removeImage(img as File);
     }}
     type="button"
    >
     <X />
    </button>
    <Image
     src={img instanceof File ? URL.createObjectURL(img) : img}
     className={cn("border-2 rounded-lg overflow-hidden object-cover", thumbnail && "border-yellow-300")}
     alt=""
     fill
     unoptimized={true}
    />
   </div>
  );
 }
);
export default ImagePreview;
