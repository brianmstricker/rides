import { isUserAdmin } from "@/actions/user-actions";
import { redirect } from "next/navigation";
import AdminNav from "./components/AdminNav";

export default async function AdminLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const isAdmin = await isUserAdmin();
 if (typeof isAdmin === "object" || !isAdmin) return redirect("/");
 return (
  <div className="min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)]">
   <AdminNav />
   <div className="mt-12 sm:mt-16">{children}</div>
  </div>
 );
}
