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
   type: String,
  },
  price: {
   type: String,
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
   validate: {
    validator: (value: string | null | undefined) => {
     if (value === null || value === undefined) return true;
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
  views: {
   type: Number,
   default: 0,
  },
  is_active: { type: Boolean, default: false },
 },
 { timestamps: true }
);

export const ListingModel = models?.Listing || model("Listing", ListingSchema);
