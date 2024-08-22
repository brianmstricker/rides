import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import Creatable from "react-select/creatable";
import { colorsList } from "./colors";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ColorInput = ({ form }: { form: UseFormReturn<any> }) => {
 const [selectedExteriorColor, setSelectedExteriorColor] = useState<string | null | undefined>(null);
 const [selectedInteriorColor, setSelectedInteriorColor] = useState<string | null | undefined>(null);
 return (
  <>
   <FormField
    control={form.control}
    name="exterior_color"
    render={({ field }) => (
     <FormItem>
      <div className="relative">
       <FormLabel>Exterior Color*</FormLabel>
       <div
        className={cn(
         "w-3.5 h-3.5 rounded-full border absolute top-1/2 -translate-y-1/2 right-0",
         !selectedExteriorColor ||
          typeof selectedExteriorColor !== "string" ||
          !colorsList.find((option) => option.value === selectedExteriorColor)
          ? "opacity-0"
          : ""
        )}
        style={{ backgroundColor: typeof selectedExteriorColor === "string" ? selectedExteriorColor : "" }}
       />
      </div>
      <FormControl>
       <Creatable
        {...field}
        placeholder="Color..."
        classNamePrefix="react-select"
        options={colorsList}
        value={colorsList.find((option) => option.value === selectedExteriorColor)}
        onChange={(selectedOption) => {
         setSelectedExteriorColor(selectedOption?.value);
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
    name="interior_color"
    render={({ field }) => (
     <FormItem>
      <div className="relative">
       <FormLabel>Interior Color</FormLabel>
       <div
        className={cn(
         "w-3.5 h-3.5 rounded-full border absolute top-1/2 -translate-y-1/2 right-0",
         !selectedInteriorColor ||
          typeof selectedInteriorColor !== "string" ||
          !colorsList.find((option) => option.value === selectedInteriorColor)
          ? "opacity-0"
          : ""
        )}
        style={{ backgroundColor: typeof selectedInteriorColor === "string" ? selectedInteriorColor : "" }}
       />
      </div>
      <FormControl>
       <Creatable
        {...field}
        placeholder="Color..."
        classNamePrefix="react-select"
        options={colorsList}
        value={colorsList.find((option) => option.value === selectedInteriorColor)}
        onChange={(selectedOption) => {
         setSelectedInteriorColor(selectedOption?.value);
         field.onChange(selectedOption?.value);
        }}
       />
      </FormControl>
      <FormMessage />
     </FormItem>
    )}
   />
  </>
 );
};
export default ColorInput;
