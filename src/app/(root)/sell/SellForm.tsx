"use client";
import { createListingSchema } from "@/schemas/listing-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";

function FormGroup({ children }: { children: React.ReactNode }) {
 return <div className="flex flex-col min-[600px]:flex-row [&>*]:flex-1 gap-x-10 gap-y-3">{children}</div>;
}

const SellForm = () => {
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
 // todo: update features to be a list of checkboxes, click on the box to show modal with the a list of features
 return (
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
         <Textarea {...field} className="h-[5rem] resize-none" />
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
         <Input {...field} className="h-[5rem]" />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
    </FormGroup>
    <div className="text-lg pt-1 relative top-1.5 font-bold">Images</div>
    <input type="file" className="hidden" id="images" />
    <label
     htmlFor="images"
     className="cursor-pointer flex items-center justify-center w-28 h-28 border border-dashed border-primary-foreground rounded-lg"
    >
     <PlusIcon className="w-8 h-8 text-primary-foreground" />
    </label>
    {/* <FormField
     control={form.control}
     name="images"
     render={({ field }) => (
      <FormItem>
       <FormLabel>Image URLs *</FormLabel>
       <FormControl>
        <Input {...field} />
       </FormControl>
       <FormMessage />
      </FormItem>
     )}
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
 );
};
export default SellForm;
