import { getRecentListings } from "@/actions/listing-actions";
import ListingCard from "../components/ListingCard";
import UserCard from "../components/UserCard";

const Page = async () => {
 const listings = await getRecentListings();
 const listingArr = JSON.parse(JSON.stringify(listings));
 return (
  <main className="contain pt-3">
   <div className="grid md:grid-cols-2 gap-6">
    <ListingCard listings={listingArr} />
    <UserCard />
   </div>
  </main>
 );
};
export default Page;
