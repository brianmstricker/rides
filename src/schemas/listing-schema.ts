import * as z from "zod";

export const createListingSchema = z.object({
 brand: z.string().min(1, "Brand required").max(50, "Brand must be at most 50 characters long"),
 model: z.string().min(1, "Model required").max(50, "Model must be at most 50 characters long"),
 year: z.number().min(1900, "Year must be at least 1900").max(2025, "Year must be at most 2025"),
 mileage: z.number().optional(),
 price: z.string().min(1, "Price required"),
 seller_location: z.string().min(1, "Seller location required").max(20, "Seller location must be at most 20 characters long"),
 exterior_color: z.string().min(1, "Exterior color required").max(20, "Exterior color must be at most 20 characters long"),
 interior_color: z.string().optional(),
 transmission: z.string().optional(),
 drivetrain: z.string().min(1, "Drivetrain required"),
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
