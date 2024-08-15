"use server";
import { UserModel } from "@/models/User";
import { usernameSchema } from "@/schemas/user-schema";
import { auth } from "@clerk/nextjs/server";

export const getUsername = async (): Promise<string | boolean | { error: string }> => {
 try {
  const { userId } = auth();
  if (!userId) return { error: "User not found" };
  const existingUsername = await UserModel.findOne({ clerkUserId: userId }).select("username").exec();
  if (existingUsername && existingUsername.username !== "") return existingUsername.username;
  return false;
 } catch (error: any) {
  console.error("getUsername error", error);
  return { error: error?.message ?? "An error occurred. Please try again." };
 }
};

export const createUserAndUsername = async ({ username }: Readonly<{ username: string }>): Promise<string | { error: string }> => {
 try {
  const { userId } = auth();
  if (!userId || !username) return { error: "Missing userId or username" };
  const { username: validatedUsername } = usernameSchema.parse({ username });
  if (!validatedUsername) return { error: "Invalid username." };
  const existingUsername = await UserModel.findOne({ username: validatedUsername });
  if (existingUsername) return { error: "Username already exists." };
  const existingUser = await UserModel.findOne({ clerkUserId: userId });
  if (existingUser) {
   existingUser.username = validatedUsername;
   await existingUser.save();
   return validatedUsername;
  }
  const newUser = new UserModel({ clerkUserId: userId, username: validatedUsername });
  await newUser.save();
  return validatedUsername;
 } catch (error: any) {
  console.error("createUsername error", error);
  return { error: error?.message ?? "An error occurred. Please try again." };
 }
};
