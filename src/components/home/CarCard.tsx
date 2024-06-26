import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import carImage from "@/assets/maincar.png";

const CarCard = () => {
 return (
  <Card className="w-[350px] shrink-0 inline-block mx-3">
   <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
    {/* <Image src={carImage} alt="hero" width={600} height={400} /> */}
   </CardHeader>
   <CardContent>card</CardContent>
   <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
   </CardFooter>
  </Card>
 );
};
export default CarCard;
