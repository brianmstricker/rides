import PageHeading from "@/components/global/PageHeading";
import SellForm from "./SellForm";

const Page = () => {
 return (
  <main className="mx-auto max-w-4xl px-4 w-full pb-3">
   <PageHeading title="Sell your vehicle" />
   <SellForm />
  </main>
 );
};
export default Page;
