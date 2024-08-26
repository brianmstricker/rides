import * as z from "zod";

export const createListingSchema = z.object({
 brand: z.string().min(1, "Brand required").max(50, "Brand must be at most 50 characters long"),
 model: z.string().min(1, "Model required").max(50, "Model must be at most 50 characters long"),
 year: z.number().min(1900, "Year must be at least 1900").max(2025, "Year must be at most 2025"),
 mileage: z
  .string()
  .refine((val) => {
   if (val === null || val === "" || val === undefined) return true;
   return /^\d+$/.test(val);
  }, "Mileage must be a number above 0")
  .optional(),
 price: z
  .string()
  .min(1, "Price required")
  .regex(/^\d+(-\d+)?$/, "Price must be a number above 0 or a range (e.g. 3000-6000)")
  .refine((val) => {
   if (val.includes("-")) {
    const [min, max] = val.split("-").map(Number);
    return min < max;
   }
   return true;
  }, "Invalid range: second number must be higher than the first")
  .refine((val) => {
   if (!val.includes("-") && Number(val) < 1) return false;
   return true;
  }, "Price must be a number above 0 or a range (e.g. 3000-6000)"),
 seller_location: z.string().min(1, "Seller location required").max(50, "Seller location must be at most 50 characters long"),
 exterior_color: z.string().min(1, "Exterior color required").max(20, "Exterior color must be at most 20 characters long"),
 interior_color: z.string().optional(),
 transmission: z.string().optional(),
 drivetrain: z.string().optional(),
 fuel_type: z.string().optional(),
 engine: z.string().optional(),
 description: z
  .string()
  .min(3, "Description must be at least 3 characters long")
  .max(500, "Description must be at most 500 characters long"),
 images: z.array(z.string()).min(1, "Images must have at least 1 item"),
 features: z.array(z.string()).optional(),
 mpg: z.number().optional(),
});
