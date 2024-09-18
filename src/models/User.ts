import { model, models, Schema, InferSchemaType, Document } from "mongoose";

const UserSchema = new Schema(
 {
  clerkUserId: {
   type: String,
   required: true,
   unique: true,
  },
  username: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, default: false },
  headAdmin: { type: Boolean, default: false },
  // saved_listings: {},
  // notifications: {},
 },
 { timestamps: true }
);

export type UserModelType = Document & InferSchemaType<typeof UserSchema>;
export const UserModel = models?.User || model("User", UserSchema);
