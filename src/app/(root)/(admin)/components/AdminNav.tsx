"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const options = [
 {
  name: "Dashboard",
  href: "/admin",
 },
 {
  name: "Listings",
  href: "/admin/listings",
 },
 {
  name: "Users",
  href: "/admin/users",
 },
 {
  name: "Settings",
  href: "/admin/settings",
 },
];

const AdminNav = () => {
 const path = usePathname();
 const activeLink = options.find((option) => option.href === path);
 return (
  <nav className="bg-primary-foreground text-foreground h-12 sm:h-16 top-0 w-full z-10 fixed border-t py-4 mt-12 sm:mt-16">
   <ul className="flex justify-between mx-auto max-w-[40rem] px-4 w-full text-sm sm:text-base">
    {options.map((option) => (
     <li key={option.name}>
      <Link
       href={option.href}
       className={cn(
        "text-foreground hover:text-mainPurple transition-colors duration-300",
        activeLink === option && "font-bold text-mainPurple"
       )}
      >
       {option.name}
      </Link>
     </li>
    ))}
   </ul>
  </nav>
 );
};
export default AdminNav;
