import TitleH2 from "../global/TitleH2";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
 return (
  <section className="contain mt-24 pb-10">
   <TitleH2 title="Customer Reviews" />
   <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    <ReviewCard className="translate-y-10" />
    <ReviewCard className="relative before:absolute before:border-yellow-600 before:border before:bg-background before:inset-0 before:z-[-1] before:-bottom-2 bg-background before:-left-2 before:mt-2 before:mr-2" />
    <ReviewCard className="translate-y-10" />
    <ReviewCard className="block md:hidden lg:block relative before:absolute before:border-yellow-600 before:border before:bg-background before:inset-0 before:z-[-1] before:-bottom-2 bg-background before:-left-2 before:mt-2 before:mr-2" />
    <ReviewCard className="block sm:hidden xl:block translate-y-10" />
   </div>
  </section>
 );
};
export default ReviewSection;
