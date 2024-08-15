import { model, models, Schema } from "mongoose";

const ListingSchema = new Schema(
 {
  userId: {
   type: Schema.Types.ObjectId,
   ref: "User",
   required: true,
  },
  brand: {
   type: String,
   required: true,
  },
  model: {
   type: String,
   required: true,
  },
  year: {
   type: Number,
   required: true,
  },
  mileage: {
   type: Schema.Types.Mixed,
   validate: {
    validator: (value: any) => {
     if (value === null || value === undefined) return true;
     return typeof value === "number";
    },
    message: "Mileage must be a number",
   },
  },
  price: {
   type: Number,
   required: true,
  },
  seller_location: {
   type: String,
   required: true,
  },
  exterior_color: {
   type: String,
   required: true,
  },
  interior_color: {
   type: String,
  },
  transmission: {
   type: String,
  },
  drivetrain: {
   type: String,
  },
  fuel_type: {
   type: String,
  },
  engine: {
   type: String,
  },
  description: {
   type: String,
   required: true,
  },
  images: {
   type: [String],
   required: true,
  },
  features: {
   type: [String],
  },
  is_active: { type: Boolean, default: false },
 },
 { timestamps: true }
);

export const ListingModel = models?.Listing || model("Listing", ListingSchema);
