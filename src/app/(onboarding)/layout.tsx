import { getUsername } from "@/actions/user-actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function OnboardingLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const user = await currentUser();
 if (!user) return redirect("/sign-in");
 if (user) {
  const username = await getUsername();
  if (username) return redirect("/");
 }
 return <div className="h-screen">{children}</div>;
}
