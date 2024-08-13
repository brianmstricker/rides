"use client";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { SignIn, useAuth } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

const page = () => {
 const router = useRouter();
 const path = usePathname();
 const { theme } = useTheme();
 const darkMode = theme === "dark";
 const { isLoaded, userId } = useAuth();
 if ((isLoaded && userId) || path === "/sign-up") {
  return null;
 }
 return (
  <>
   {isLoaded && (
    <Dialog defaultOpen open>
     <DialogOverlay
      // onClick={() => router.back()}
      className="bg-black/80 w-full h-full inset-0 fixed z-[9995] flex items-center justify-center"
     >
      <DialogContent>
       <DialogHeader>
        <DialogTitle className="sr-only">Login</DialogTitle>
       </DialogHeader>
       <div onClick={(e) => e.stopPropagation()} className="relative z-[9996]">
        <Button onClick={() => router.back()} variant="ghost" className="absolute top-1.5 right-1.5 z-[9999] h-7 px-2">
         <X />
        </Button>
        <div className="relative z-[9997]">
         <SignIn
          appearance={{
           baseTheme: darkMode ? dark : undefined,
          }}
         />
        </div>
       </div>
      </DialogContent>
     </DialogOverlay>
    </Dialog>
   )}
  </>
 );
};
export default page;
