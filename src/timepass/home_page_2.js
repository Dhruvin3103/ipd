/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YtmNgUxDNYn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import pic_1 from '@/images/home_page_pic_1.png'
import Image from "next/image"
import Navbar from "./Navbar"
import Footer from "./Footer"


export default function Component() {
  return (
    <>
    <Navbar style={{ backgroundColor: "blue", padding: "10px" }}></Navbar>
    {/* <Navbar/> */}
      <div className="bg-gray-50/90 border-t">

        <div className="container grid gap-6 px-4 py-12 md:grid-cols-2 md:py-16 lg:py-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The 🅿️arking Guardian🚓</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The all-in-one solution for parking management. Let your customers park with confidence.
                
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">Contact</h2>
                <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                  Email: contact@parkingguardian.com
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">About</h2>
                <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                  The Parking Guardian is a comprehensive parking management platform designed to streamline parking
                  operations for businesses and enhance the parking experience for customers.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* <img
              alt="Hero"
              className="rounded-xl object-cover object-center"
              height="300"
              src={pic_1}
              style={{
                aspectRatio: "600/300",
                objectFit: "cover",
              }}
              width="600"
            /> */}
            {/* <Image height={500} width={500} src={pic_1}></Image> */}
            <Image className="h-500 w-500 rounded-full shadow-lg" src={pic_1}  ></Image> 
          </div>
        </div>
      </div>
      <div className="container grid gap-6 px-4 py-12 md:py-16">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Parking Made Easy</h2>
            <p className="mx-auto max-w-[700px] text-blue-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The all-in-one solution for parking management. Let your customers park with confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container grid gap-6 px-4 py-12 md:py-16">
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The Parking Guardian offers a range of features to make parking management simple and convenient.
              </p>
            </div>
          </div>
          <div className="grid max-w-sm gap-4 mx-auto items-start justify-center sm:max-w-none sm:grid-cols-2 lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-1.5 p-2 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
  <div className="flex items-center justify-start">
    <ParkingMeterIcon className="w-5 h-5 mr-2.5" />
    <h3 className="text-base font-semibold tracking-tight">Anti-Theft</h3>
  </div>
  <p className="text-sm text-gray-500 dark:text-gray-400">
    Alertss ⚠️ In case your Vehicle moves when you aren't around !!
  </p>
</div>
            <div className="flex flex-col gap-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg shadow-md transition-all duration-300">
              <div className="flex items-center justify-start">
                <ParkingSquareIcon className="w-5 h-5 mr-2.5" />
                <h3 className="text-base font-semibold tracking-tight">Current Location</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Know Yours and Your Vehicl's Current Live 🛜🔺 Location 
                Track 📲 It using Real-Time ⌚
              </p>
            </div>
            <div className="flex flex-col gap-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg shadow-md transition-all duration-300">
              <div className="flex items-center justify-start">
                <ParkingMeterIcon className="w-5 h-5 mr-2.5" />
                <h3 className="text-base font-semibold tracking-tight">Nearest Parking Zone</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Keep an eye 👁️ out for the Nearest Parking Zones available near 🔍🗺️ you 
              </p>
            </div>
            <div className="flex flex-col gap-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg shadow-md transition-all duration-300">
              <div className="flex items-center justify-start">
                <ParkingSquareIcon className="w-5 h-5 mr-2.5" />
                <h3 className="text-base font-semibold tracking-tight">Overall Analysis</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Wanna see your average speed,distance,your vehicle Location etc. details ? CLICK HERE!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid gap-6 px-4 py-12 md:py-16">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sign Up/Log In</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Access the full suite of Parking Guardian features by signing up for an account or logging in.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-sm space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">
                <LogInIcon className="mr-2.5 h-5 w-5" />
                Sign In
              </CardTitle>
              <CardDescription className="text-sm">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <Input placeholder="Username/Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Button className="w-full">Sign In</Button>
              </div>
            </CardContent>
          </Card>
          <div className="text-center text-sm">
            Don't have an account?
            <Link className="font-medium underline" href="#">
              Sign up here
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function ParkingMeterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 9a3 3 0 1 1 6 0" />
      <path d="M12 12v3" />
      <path d="M11 15h2" />
      <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" />
      <path d="M12 19v3" />
    </svg>
  )
}


function ParkingSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
}