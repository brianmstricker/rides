import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
 {
  userId: {},
  saved_listings: {},
  notifications: {},
  isAdmin: { type: Boolean, default: false },
 },
 { timestamps: true }
);

export const UserModel = models?.User || model("User", UserSchema);
