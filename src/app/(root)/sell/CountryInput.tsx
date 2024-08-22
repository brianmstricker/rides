import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import Creatable from "react-select/creatable";
import { countriesList } from "./countries";
import { useState } from "react";

const CountryInput = ({ form }: { form: UseFormReturn<any> }) => {
 const [selectedCountry, setSelectedCountry] = useState<string | null | undefined>(null);
 return (
  <FormField
   control={form.control}
   name="seller_location"
   render={({ field }) => (
    <FormItem>
     <FormLabel>Location (country)*</FormLabel>
     <FormControl>
      <Creatable
       {...field}
       placeholder="Country..."
       classNamePrefix="react-select"
       options={countriesList}
       value={countriesList.find((option) => option.value === selectedCountry)}
       onChange={(selectedOption) => {
        setSelectedCountry(selectedOption?.value);
        field.onChange(selectedOption?.value);
       }}
      />
     </FormControl>
     <FormMessage />
    </FormItem>
   )}
  />
 );
};
export default CountryInput;
