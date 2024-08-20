import * as z from "zod";

export const createListingSchema = z.object({
 brand: z.string().min(3, "Brand must be at least 3 characters long").max(20, "Brand must be at most 20 characters long"),
 model: z.string().min(3, "Model must be at least 3 characters long").max(20, "Model must be at most 20 characters long"),
 year: z.number().min(1900, "Year must be at least 1900").max(2022, "Year must be at most 2022"),
 mileage: z.number().optional(),
 price: z.number().min(100, "Price must be at least 100").max(1000000, "Price must be at most 1000000"),
 seller_location: z
  .string()
  .min(3, "Seller location must be at least 3 characters long")
  .max(20, "Seller location must be at most 20 characters long"),
 exterior_color: z
  .string()
  .min(3, "Exterior color must be at least 3 characters long")
  .max(20, "Exterior color must be at most 20 characters long"),
 interior_color: z.string().optional(),
 transmission: z.string().optional(),
 drivetrain: z.string().min(1, "Drivetrain is required"),
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
