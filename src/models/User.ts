import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
 {
  userId: {},
  saved_listings: {},
 },
 { timestamps: true }
);

export const UserModel = models?.User || model("User", UserSchema);
