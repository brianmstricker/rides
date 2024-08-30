import { ListingModelType } from "@/models/Listing";
import { UserModelType } from "@/models/User";

type ListingType = Partial<ListingModelType> & { _id: string; userId: { username: string } };

type UserType = Partial<UserModelType>;

export type { ListingType, UserType };
