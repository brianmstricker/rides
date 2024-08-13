import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { currentUser } from "@clerk/nextjs/server";
import { getUsername } from "@/actions/user-actions";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/dbConnect";

export default async function MainLayout({
 children,
 modal,
}: Readonly<{
 children: React.ReactNode;
 modal: React.ReactNode;
}>) {
 try {
  await dbConnect();
 } catch (error) {
  console.error("dbConnect error", error);
 }
 const user = await currentUser();
 if (user && user.id) {
  const username = await getUsername({ userId: user.id });
  if (!username) {
   redirect("/onboarding");
  }
 }
 return (
  <div className="min-h-[100dvh] flex flex-col">
   <Navbar />
   <div className="pt-12 sm:pt-16 overflow-hidden grow flex flex-col">
    {modal}
    {children}
   </div>
   <Footer />
  </div>
 );
}
