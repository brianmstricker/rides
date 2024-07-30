"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LoginButton = () => {
 return (
  <Link scroll={false} href="/sign-in" className={cn("text-[15px]", buttonVariants({ variant: "main" }))}>
   Login
  </Link>
 );
};
export default LoginButton;
