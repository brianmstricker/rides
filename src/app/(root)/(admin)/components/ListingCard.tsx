import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListingType } from "@/models/Listing";

const ListingCard = ({ listings }: { listings: Partial<ListingType>[] }) => {
 return (
  <Card>
   <CardHeader>
    <CardTitle className="text-2xl">Recent Listings</CardTitle>
   </CardHeader>
   <CardContent>
    <div>content</div>
   </CardContent>
  </Card>
 );
};
export default ListingCard;
