import { getRecentListings } from "@/actions/listing-actions";
import ListingCard from "../components/ListingCard";
import UserCard from "../components/UserCard";
import { getRecentUsers } from "@/actions/user-actions";

const Page = async () => {
 const listings = await getRecentListings();
 const listingArr = JSON.parse(JSON.stringify(listings));
 const users = await getRecentUsers();
 const userArr = JSON.parse(JSON.stringify(users));
 return (
  <main className="contain pt-3">
   <div className="grid md:grid-cols-2 gap-6">
    {!("error" in listings) ? (
     <ListingCard listings={listingArr} />
    ) : (
     <div className="text-center text-2xl text-red-500">{listings.error}</div>
    )}
    {!("error" in users) ? <UserCard users={userArr} /> : <div className="text-center text-2xl text-red-500">{users.error}</div>}
   </div>
  </main>
 );
};
export default Page;
