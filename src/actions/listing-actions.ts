"use server";
import { ListingModel, ListingModelType } from "@/models/Listing";
import { UserModel } from "@/models/User";
import { createListingSchema } from "@/schemas/listing-schema";
import { ListingType } from "@/types";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

if (!process.env.S3_ACCESS_KEY_ID || !process.env.S3_SECRET_ACCESS_KEY || !process.env.AWS_REGION || !process.env.S3_BUCKET_NAME) {
 throw new Error("Missing AWS S3 credentials");
}

const client = new S3Client({
 region: process.env.AWS_REGION,
 credentials: {
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
 },
});

export const createListing = async (
 values: z.infer<typeof createListingSchema>,
 formData: FormData
): Promise<{ success: boolean } | { error: string }> => {
 try {
  const { userId } = await auth();
  if (!userId) return { error: "User not found" };
  const user = await UserModel.findOne({ clerkUserId: userId }).exec();
  if (!user) return { error: "User not found" };
  const validForm = createListingSchema.parse({ ...values });
  if (!validForm) return { error: "Invalid form" };
  const images = formData.getAll("images");
  if (!images || images.length === 0) return { error: "Images required" };
  const imageURLs: string[] = [];
  for (const image of images) {
   if (!(image instanceof File)) return { error: "Invalid image(s)" };
   const imageType = image.type.split("/")[0];
   if (imageType !== "image") return { error: "Invalid image(s)" };
   // const imageSize = image.size / 1024 / 1024;
   // if (imageSize > 5) return { error: "Image(s) must be less than 5MB" };
   const imageExt = image.name.split(".").pop();
   if (!imageExt) return { error: "Invalid image(s)" };
   const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   const newImageName = `${user._id}-${randomString}.${imageExt}`;
   const buffer = await image.arrayBuffer();
   const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: newImageName,
    Body: new Uint8Array(buffer),
    ContentType: image.type,
    ACL: "public-read",
   });
   await client.send(command);
   imageURLs.push(`https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${newImageName}`);
  }
  if (imageURLs.length === 0) return { error: "Error uploading images. Please try again." };
  const newListing = new ListingModel({ ...values, images: imageURLs, userId: user._id });
  await newListing.save();
  return { success: true };
 } catch (error: any) {
  console.error("uploadImages error", error);
  return { error: error?.message ?? "An error occurred. Please try again." };
 }
};

export const getRecentListings = async (): Promise<ListingType[] | { error: string }> => {
 try {
  const listings = await ListingModel.find()
   .sort({ createdAt: -1 })
   .limit(10)
   .populate({
    path: "userId",
    model: UserModel,
    select: "username",
   })
   .exec();
  return listings ?? [];
 } catch (error: any) {
  console.error("getRecentListings error", error);
  return { error: error?.message ?? "An error occurred. Please try again." };
 }
};

export const updateListingActive = async (
 listingId: string | undefined | null,
 value: "active" | "blocked"
): Promise<{ success: boolean } | { error: string }> => {
 try {
  if (!listingId) return { error: "Listing id required" };
  const listing = (await ListingModel.findById(listingId).exec()) as ListingModelType | null;
  if (!listing) return { error: "Listing not found" };
  if (!value || (value !== "active" && value !== "blocked")) return { error: "Invalid value" };
  value === "active" ? (listing.is_active = "active") : (listing.is_active = "blocked");
  await listing.save();
  return { success: true };
 } catch {
  return { error: "An error occurred. Please try again." };
 }
};
