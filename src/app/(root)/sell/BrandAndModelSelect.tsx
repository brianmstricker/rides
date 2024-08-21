import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Creatable from "react-select/creatable";
import { carBrands, carModels } from "./brandsAndModels";

const BrandAndModelSelect = ({ form }: { form: UseFormReturn<any> }) => {
 // todo: create small popup to inform user they can type to create a new brand or model
 const [selectedBrand, setSelectedBrand] = useState<string | null | undefined>(null);
 const [selectedModel, setSelectedModel] = useState<string | null | undefined>(null);
 useEffect(() => {
  if (!selectedBrand) return;
  form.setValue("model", "");
 }, [selectedBrand]);
 return (
  <div className="flex flex-col min-[600px]:flex-row [&>*]:flex-1 gap-x-10 gap-y-3">
   <FormField
    control={form.control}
    name="brand"
    render={({ field }) => (
     <FormItem>
      <FormLabel>Brand*</FormLabel>
      <FormControl>
       <Creatable
        {...field}
        placeholder="Select brand"
        classNamePrefix="react-select"
        options={carBrands}
        value={carBrands.find((option) => option.value === selectedBrand)}
        onChange={(selectedOption) => {
         setSelectedBrand(selectedOption?.value);
         field.onChange(selectedOption?.value);
        }}
       />
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
      <FormLabel>Model*</FormLabel>
      <FormControl>
       <Creatable
        {...field}
        placeholder="Select model"
        classNamePrefix="react-select"
        options={carModels[selectedBrand as keyof typeof carModels] || []}
        value={carModels[selectedBrand as keyof typeof carModels]?.find((option) => option.value === selectedModel) || null}
        onChange={(selectedOption) => {
         setSelectedModel(selectedOption?.value);
         field.onChange(selectedOption?.value);
        }}
       />
      </FormControl>
      <FormMessage />
     </FormItem>
    )}
   />
  </div>
 );
};
export default BrandAndModelSelect;
