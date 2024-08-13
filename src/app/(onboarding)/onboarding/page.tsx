"use client";
import { usernameSchema } from "@/schemas/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUsername } from "@/actions/user-actions";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Page = () => {
 const [success, setSuccess] = useState(false);
 const { signOut } = useAuth();
 const router = useRouter();
 const form = useForm<z.infer<typeof usernameSchema>>({
  resolver: zodResolver(usernameSchema),
  defaultValues: {
   username: "",
  },
 });
 async function onSubmit(values: z.infer<typeof usernameSchema>) {
  const { username } = values;
  const res = await createUsername({ username });
  if (typeof res === "object") {
   form.setError("username", {
    type: "manual",
    message: res.error ?? "An error occurred. Please try again.",
   });
   return;
  }
  if (typeof res === "string") {
   setSuccess(true);
   toast.success(`Welcome, ${res}!`);
   setTimeout(() => {
    router.refresh();
   }, 4000);
  }
 }
 return (
  <main className="h-full flex items-center justify-center">
   <div className="bg-primary-foreground p-20 rounded-md relative">
    <h1 className="text-center text-[11vw] sm:text-6xl font-bold font-header tracking-wider">Welcome</h1>
    <p className="text-center text-muted-foreground mb-6 text-sm">To finish the onboarding process enter a username.</p>
    <Form {...form}>
     <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("max-w-xs mx-auto", success && "opacity-0 pointer-events-none select-none")}
     >
      <FormField
       control={form.control}
       name="username"
       render={({ field }) => (
        <FormItem>
         <FormLabel className="relative -bottom-1">Username</FormLabel>
         <FormControl>
          <Input {...field} />
         </FormControl>
         <FormMessage className="absolute" />
        </FormItem>
       )}
      />
      <div className="text-center mt-12">
       <Button variant={"main"} className="text-lg" type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Submitting..." : "Submit"}
       </Button>
       <div className="my-2 text-sm">or</div>
       <Button
        type="button"
        onClick={async () => {
         await signOut();
         toast("Logged out successfully");
        }}
       >
        Logout
       </Button>
      </div>
     </form>
    </Form>
    <div
     className={cn(
      "absolute top-[55%] left-1/2 -translate-x-1/2 whitespace-nowrap",
      success ? "opacity-100" : "opacity-0 pointer-events-none select-none"
     )}
    >
     <p className="text-xl sm:text-2xl text-green-600">Success! Redirecting...</p>
    </div>
   </div>
  </main>
 );
};
export default Page;
