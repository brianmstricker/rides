import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
import { headerFont, mainFont } from "@/app/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata: Metadata = {
 title: "rides • Car marketplace",
 description: "Online car marketplace",
};

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <ClerkProvider>
   <html lang="en" suppressHydrationWarning>
    <body className={cn("min-h-screen bg-background text-foreground font-sans antialiased", mainFont.variable, headerFont.variable)}>
     <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      <ScrollProvider>
       <Toaster />
       {children}
      </ScrollProvider>
     </ThemeProvider>
    </body>
   </html>
  </ClerkProvider>
 );
}
