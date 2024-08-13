import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
 {
  clerkUserId: {
   type: String,
   required: true,
   unique: true,
  },
  username: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, default: false },
  // saved_listings: {},
  // notifications: {},
 },
 { timestamps: true }
);

export const UserModel = models?.User || model("User", UserSchema);
