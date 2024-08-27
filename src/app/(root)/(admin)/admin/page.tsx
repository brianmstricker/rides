import { getRecentListings } from "@/actions/listing-actions";
import ListingCard from "../components/ListingCard";
import UserCard from "../components/UserCard";

const Page = async () => {
 const listings = await getRecentListings();
 return (
  <main className="contain mt-3">
   <div className="grid sm:grid-cols-2 gap-6">
    <ListingCard listings={listings} />
    <UserCard />
   </div>
  </main>
 );
};
export default Page;
