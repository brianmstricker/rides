"use server";
import { UserModel } from "@/models/User";
import { usernameSchema } from "@/schemas/user-schema";
import { auth } from "@clerk/nextjs/server";

export const getUsername = async ({ userId }: Readonly<{ userId: string }>): Promise<boolean | { error: string }> => {
 try {
  if (!userId) return { error: "Missing user ID" };
  const existingUsername = await UserModel.findOne({ clerkUserId: userId }).select("username").lean().exec();
  if (existingUsername) return true;
  return false;
 } catch (error: any) {
  console.error("getUsername error", error);
  return { error: error?.message ?? "An error occurred. Please try again." };
 }
};

export const createUsername = async ({ username }: Readonly<{ username: string }>): Promise<string | { error: string }> => {
 try {
  const { userId } = auth();
  if (!userId || !username) return { error: "Missing userId or username" };
  const { username: validatedUsername } = usernameSchema.parse({ username });
  if (!validatedUsername) return { error: "Invalid username." };
  const existingUser = await UserModel.findOne({ username: validatedUsername });
  if (existingUser) return { error: "Username already exists." };
  const newUser = new UserModel({ clerkUserId: userId, username: validatedUsername });
  await newUser.save();
  return validatedUsername;
 } catch (error: any) {
  console.error("createUsername error", error);
  return { error: error?.message ?? "An error occurred. Please try again." };
 }
};
