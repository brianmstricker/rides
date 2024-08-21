"use client";
import { createListingSchema } from "@/schemas/listing-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import FeaturesModal from "./FeaturesModal";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import ImageInput from "./ImageInput";
import SelectedImageModal from "./SelectedImageModal";
import BrandAndModelSelect from "./BrandAndModelSelect";

function FormGroup({ children }: { children: React.ReactNode }) {
 return <div className="flex flex-col min-[600px]:flex-row [&>*]:flex-1 gap-x-10 gap-y-3">{children}</div>;
}

const SellForm = () => {
 const [previewImages, setPreviewImages] = useState<File[]>([]);
 const [imagesToUpload, setImagesToUpload] = useState<FileList | null | File[]>(null);
 const [showFeaturesModal, setShowFeaturesModal] = useState(false);
 const [customFeatureInput, setCustomFeatureInput] = useState("");
 const [customFeatures, setCustomFeatures] = useState<string[]>([]);
 const [features, setFeatures] = useState<string[]>([]);
 const [selectedImageForModal, setSelectedImageForModal] = useState<File | null>(null);
 const [selectedImageAspectRatio, setSelectedImageAspectRatio] = useState<number | null>(null);
 const imageInputRef = useRef<HTMLInputElement>(null);
 const featuresButtonRef = useRef<HTMLButtonElement>(null);
 const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);
 const form = useForm<z.infer<typeof createListingSchema>>({
  resolver: zodResolver(createListingSchema),
  defaultValues: {
   brand: "",
   model: "",
   year: 0,
   mileage: undefined,
   price: "",
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
   mpg: undefined,
  },
 });
 function onSubmit(values: z.infer<typeof createListingSchema>) {
  console.log(values);
 }
 function clearAllImagePreviews() {
  setPreviewImages([]);
  setImagesToUpload(null);
  if (imageInputRef.current) imageInputRef.current.value = "";
 }
 return (
  <>
   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
     <BrandAndModelSelect form={form} />
     <FormGroup>
      <FormField
       control={form.control}
       name="year"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Year*</FormLabel>
         <FormControl>
          <Input {...field} type="number" onChange={(e) => field.onChange(parseInt(e.target.value))} />
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
         <FormLabel>Price*</FormLabel>
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
         <FormLabel>Location (country)*</FormLabel>
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
         <FormLabel>Exterior Color*</FormLabel>
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
         <FormLabel>Description*</FormLabel>
         <FormControl>
          <Textarea {...field} className="min-h-[5rem] max-h-[15rem] resize-none" maxLength={500} ref={descriptionTextareaRef} />
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
           ref={featuresButtonRef}
           className={cn(
            "min-h-[5rem] w-full border rounded-md border-input shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex",
            features.length === 0 && "justify-center items-center"
           )}
           onClick={() => setShowFeaturesModal(true)}
          >
           {features.length === 0 ? (
            <div className="flex items-center gap-2">
             <Plus />
             <span>Click to add</span>
            </div>
           ) : (
            <div className="h-full p-2 text-sm flex flex-wrap gap-2">
             {features.map((feature, i) => (
              <div key={i} className="truncate capitalize">
               • {feature}
              </div>
             ))}
            </div>
           )}
          </button>
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
       <button className="text-sm px-0.5" type="button" onClick={clearAllImagePreviews}>
        Clear all
       </button>
      )}
     </div>
     <FormField
      control={form.control}
      name="images"
      render={({ field }) => (
       <FormItem>
        <FormControl>
         <ImageInput
          imageInputRef={imageInputRef}
          imagesToUpload={imagesToUpload}
          setImagesToUpload={setImagesToUpload}
          previewImages={previewImages}
          setPreviewImages={setPreviewImages}
          setSelectedImageForModal={setSelectedImageForModal}
          form={form}
         />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
     {/* <ImageInput
      imageInputRef={imageInputRef}
      imagesToUpload={imagesToUpload}
      setImagesToUpload={setImagesToUpload}
      previewImages={previewImages}
      setPreviewImages={setPreviewImages}
      setSelectedImageForModal={setSelectedImageForModal}
     /> */}
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
         <FormLabel>Drivetrain*</FormLabel>
         <FormControl>
          <Select
           onValueChange={(value) => {
            form.setValue("drivetrain", value);
           }}
          >
           <SelectTrigger>
            <SelectValue placeholder="Select" />
           </SelectTrigger>
           <SelectContent>
            <SelectGroup>
             <SelectItem value="awd">AWD</SelectItem>
             <SelectItem value="fwd">FWD</SelectItem>
             <SelectItem value="rwd">RWD</SelectItem>
            </SelectGroup>
           </SelectContent>
          </Select>
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
      <FormField
       control={form.control}
       name="mpg"
       render={({ field }) => (
        <FormItem>
         <FormLabel>MPG</FormLabel>
         <FormControl>
          <Input {...field} type="number" />
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
   {showFeaturesModal && (
    <FeaturesModal
     setShowFeaturesModal={setShowFeaturesModal}
     customFeatures={customFeatures}
     setCustomFeatures={setCustomFeatures}
     features={features}
     setFeatures={setFeatures}
     customFeatureInput={customFeatureInput}
     setCustomFeatureInput={setCustomFeatureInput}
     featuresButtonRef={featuresButtonRef}
     descriptionTextareaRef={descriptionTextareaRef}
    />
   )}
   {selectedImageForModal && (
    <SelectedImageModal
     selectedImageForModal={selectedImageForModal}
     setSelectedImageForModal={setSelectedImageForModal}
     selectedImageAspectRatio={selectedImageAspectRatio}
     setSelectedImageAspectRatio={setSelectedImageAspectRatio}
    />
   )}
  </>
 );
};
export default SellForm;
