import { model, models, Schema } from "mongoose";

const ListingSchema = new Schema(
 {
  userId: {},
  brand: {},
  model: {},
  year: {},
  mileage: {},
  price: {},
  seller_location: {},
  exterior_color: {},
  interior_color: {},
  transmission: {},
  drivetrain: {},
  fuel_type: {},
  engine: {},
  description: {},
  images: {},
  features: {},
  is_active: { type: Boolean, default: false },
 },
 { timestamps: true }
);

export const ListingModel = models?.Listing || model("Listing", ListingSchema);
