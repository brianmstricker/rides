"use client";
import { createListingSchema } from "@/schemas/listing-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, PlusIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ImagePreview from "./ImagePreview";
import FeaturesModal from "./FeaturesModal";

function FormGroup({ children }: { children: React.ReactNode }) {
 return <div className="flex flex-col min-[600px]:flex-row [&>*]:flex-1 gap-x-10 gap-y-3">{children}</div>;
}

const SellForm = () => {
 // todo: update features to be a list of checkboxes, click on the box to show modal with the a list of features
 const [previewImages, setPreviewImages] = useState<File[]>([]);
 const [imagesToUpload, setImagesToUpload] = useState<FileList | null | File[]>(null);
 const [showFeaturesModal, setShowFeaturesModal] = useState(false);
 const previewInputRef = useRef<HTMLInputElement>(null);
 const form = useForm<z.infer<typeof createListingSchema>>({
  resolver: zodResolver(createListingSchema),
  defaultValues: {
   brand: "",
   model: "",
   year: 0,
   mileage: undefined,
   price: 0,
   seller_location: "",
   exterior_color: "",
   interior_color: "",
   transmission: "",
   drivetrain: "",
   fuel_type: "",
   engine: "",
   description: "",
   images: [],
   features: [],
  },
 });
 function onSubmit(values: z.infer<typeof createListingSchema>) {
  console.log(values);
 }
 function clearAll() {
  setPreviewImages([]);
  setImagesToUpload(null);
  if (previewInputRef.current) previewInputRef.current.value = "";
 }
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
 useEffect(() => {
  if (!previewImages || previewImages.length === 0) return;
  previewImages.forEach((prev) => {
   const url = URL.createObjectURL(prev);
   const img = document.createElement("img");
   img.src = url;
   img.onload = () => URL.revokeObjectURL(url);
   if (previewInputRef.current) previewInputRef.current.value = "";
  });
 }, [previewImages, previewImages.length]);
 return (
  <>
   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
     <FormGroup>
      <FormField
       control={form.control}
       name="brand"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Brand *</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="model"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Model *</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </FormGroup>
     <FormGroup>
      <FormField
       control={form.control}
       name="year"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Year *</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="mileage"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Mileage</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="price"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Price *</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </FormGroup>
     <FormGroup>
      <FormField
       control={form.control}
       name="seller_location"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Location (country) *</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="exterior_color"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Exterior Color *</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="interior_color"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Interior Color</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </FormGroup>
     <FormGroup>
      <FormField
       control={form.control}
       name="description"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Description *</FormLabel>
         <FormControl>
          <Textarea {...field} className="h-[5rem] resize-none" maxLength={500} />
         </FormControl>
         <FormMessage />
         <FormDescription>Max. 500 characters</FormDescription>
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="features"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Features</FormLabel>
         <FormControl>
          <button
           type="button"
           className="h-[5rem] w-full border rounded-md border-input shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center"
           onClick={() => setShowFeaturesModal(true)}
          >
           <div className="flex items-center gap-2">
            <Plus />
            <span>Click to add</span>
           </div>
          </button>
          {/* <Input {...field} className="h-[5rem]" /> */}
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </FormGroup>
     <div className="text-lg pt-1 relative top-1.5 font-bold flex justify-between items-center">
      <div>
       Images*<span className="text-sm ml-2">(20 max)</span>
      </div>
      {previewImages && previewImages.length > 0 && (
       <button className="text-sm px-0.5" type="button" onClick={clearAll}>
        Clear all
       </button>
      )}
     </div>
     <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
      <input
       ref={previewInputRef}
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
          previewInputRef={previewInputRef}
          thumbnail={i === 0 ? true : false}
         />
        ))}
       </>
      )}
     </div>
     <div className="text-lg pt-1 relative top-1.5 font-bold">Misc.</div>
     <FormGroup>
      <FormField
       control={form.control}
       name="transmission"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Transmission</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="drivetrain"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Drivetrain</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="fuel_type"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Fuel Type</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="engine"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Engine</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </FormGroup>
     <div className="flex justify-center pt-6">
      <Button type="submit">Submit</Button>
     </div>
    </form>
   </Form>
   {showFeaturesModal && <FeaturesModal setShowFeaturesModal={setShowFeaturesModal} />}
  </>
 );
};
export default SellForm;
