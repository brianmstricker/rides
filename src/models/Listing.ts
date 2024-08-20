import { model, models, Schema } from "mongoose";

// todo: add type
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
   required: true,
   validate: {
    validator: (value: string) => {
     return ["FWD", "RWD", "AWD"].includes(value.toUpperCase());
    },
    message: "Drivetrain must be one of FWD, RWD, AWD",
   },
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
  mpg: {
   type: Number,
  },
  is_active: { type: Boolean, default: false },
 },
 { timestamps: true }
);

export const ListingModel = models?.Listing || model("Listing", ListingSchema);
