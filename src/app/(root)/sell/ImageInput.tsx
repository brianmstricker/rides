"use client";
import { PlusIcon } from "lucide-react";
import ImagePreview from "./ImagePreview";
import { useEffect } from "react";

const ImageInput = ({
 imageInputRef,
 imagesToUpload,
 setImagesToUpload,
 previewImages,
 setPreviewImages,
 setSelectedImageForModal,
}: {
 imageInputRef: React.MutableRefObject<HTMLInputElement | null>;
 imagesToUpload: File[] | FileList | null;
 setImagesToUpload: React.Dispatch<React.SetStateAction<File[] | FileList | null>>;
 previewImages: File[];
 setPreviewImages: React.Dispatch<React.SetStateAction<File[]>>;
 setSelectedImageForModal: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
 useEffect(() => {
  if (!previewImages || previewImages.length === 0) return;
  previewImages.forEach((prev) => {
   const url = URL.createObjectURL(prev);
   const img = document.createElement("img");
   img.src = url;
   img.onload = () => URL.revokeObjectURL(url);
   if (imageInputRef.current) imageInputRef.current.value = "";
  });
 }, [previewImages, previewImages.length]);
 useEffect(() => {
  if (!imagesToUpload) return;
  const updatedImages = Array.from(imagesToUpload);
  const updatedMediaArray = updatedImages.slice(0, 20);
  const mediaUrlArray = updatedMediaArray.map((media) => URL.createObjectURL(media));
  setPreviewImages(updatedMediaArray);
  return () => {
   mediaUrlArray.forEach((media) => URL.revokeObjectURL(media));
  };
 }, [imagesToUpload, setPreviewImages]);
 return (
  <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
   <input
    ref={imageInputRef}
    type="file"
    multiple={true}
    className="hidden"
    id="images"
    onChange={(e) => {
     if (!e.target.files) return;
     const newFiles = Array.from(e.target.files);
     const updatedFiles = Array.from(imagesToUpload || []);
     const combinedFiles = [...updatedFiles, ...newFiles];
     setImagesToUpload(combinedFiles);
    }}
   />
   <label
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && imageInputRef.current?.click()}
    htmlFor="images"
    className="cursor-pointer flex items-center justify-center w-full aspect-square border rounded-lg shrink-0"
   >
    <PlusIcon className="w-10 h-10 min-[360px]:w-8 min-[360px]:h-8" />
   </label>
   {previewImages.length > 0 && (
    <>
     {previewImages.map((img, i) => (
      <ImagePreview
       key={i}
       setPreviewImages={setPreviewImages}
       setImagesToUpload={setImagesToUpload}
       previewImages={previewImages}
       img={img}
       previewInputRef={imageInputRef}
       thumbnail={i === 0 ? true : false}
       setSelectedImageForModal={setSelectedImageForModal}
      />
     ))}
    </>
   )}
  </div>
 );
};
export default ImageInput;
