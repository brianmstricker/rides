"use client";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const UserMenu = () => {
 const { theme } = useTheme();
 const darkMode = theme === "dark";
 return (
  <UserButton
   appearance={{
    baseTheme: darkMode ? dark : undefined,
   }}
  />
 );
};
export default UserMenu;
