import { PlusIcon } from "lucide-react";
import ImagePreview from "./ImagePreview";

const ImageInput = ({
 imageInputRef,
 imagesToUpload,
 setImagesToUpload,
 previewImages,
 setPreviewImages,
}: {
 imageInputRef: React.MutableRefObject<HTMLInputElement | null>;
 imagesToUpload: File[] | FileList | null;
 setImagesToUpload: React.Dispatch<React.SetStateAction<File[] | FileList | null>>;
 previewImages: File[];
 setPreviewImages: React.Dispatch<React.SetStateAction<File[]>>;
}) => {
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
   <label htmlFor="images" className="cursor-pointer flex items-center justify-center w-full aspect-square border rounded-lg shrink-0">
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
      />
     ))}
    </>
   )}
  </div>
 );
};
export default ImageInput;
