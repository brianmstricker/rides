import { getUserInfo, isUserAdmin } from "@/actions/user-actions";
import { redirect } from "next/navigation";

export default async function AdminLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const isAdmin = await isUserAdmin();
 if (typeof isAdmin === "object" || !isAdmin) return redirect("/");
 return <div className="h-screen">{children}</div>;
}
