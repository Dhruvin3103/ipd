"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o81IBIn5nB0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Navbar from "./Navbar"

export default function Component() {
  return (
    <>
    {/* <Navbar/> */}
    <Card>
      <CardHeader>

        <CardTitle>The 🅿️arking Guardian🚘🚨</CardTitle>
        <CardTitle></CardTitle>
        <CardTitle>Contact us</CardTitle>
        <CardDescription>Please fill in the form below to contact us.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
      <Button className="ml-auto bg-blue-500 hover:bg-red-500 text-white font-bold py-4 px-8 rounded">Submit</Button>

      </CardFooter>
    </Card>
    </>
  )
}

