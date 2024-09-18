import { InferSchemaType, model, models, Schema, Document } from "mongoose";

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
     if (!value || value.trim() === "") return true;
     return /^(FWD|RWD|AWD)$/i.test(value);
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
  is_active: { type: String, enum: ["waiting", "active", "blocked", "sold", "update"], default: "waiting" },
  condition: {
   type: String,
   enum: ["new", "used"],
   default: "used",
  },
 },
 { timestamps: true }
);

export type ListingModelType = Document & InferSchemaType<typeof ListingSchema>;
export const ListingModel = models?.Listing || model("Listing", ListingSchema);
