/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ABwtIgzRdGg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTitle, AlertDescription, Alert } from "@/components/ui/alert"
import Navbar_2 from "./Navbar_2"
import Footer from "./Footer"

export default function Component() {
  return (
    <>
    <Navbar_2/>
    <section className="w-full h-full p-4 md:p-6 lg:p-8">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold"> Ananlysis</h1>
        <Badge className="items-center">
          <CarIcon className="w-5 h-5" />
          Vehicle Status: Active
        </Badge>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-[400px] rounded-md overflow-hidden">
          <img
            alt="Map showing vehicle location"
            className="w-full h-full object-cover"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/400",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">
              Track the location and status of your vehicle in real-time. Get alerts for wrong parking zones.
            </p>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Vehicle ID:</p>
              <p>PG12345</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Last updated:</p>
              <p>2 mins ago</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Location:</p>
              <p>Zone B, Lot 5</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Distance Travelled</p>
              <p>Kms</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Status:</p>
              <Badge className="items-center">
                <CheckCircleIcon className="w-4 h-4" />
                Parked
              </Badge>
            </div>
            
            {/* <Button className="w-full mt-4" variant="outline" >
              Update Location
            </Button> */}
            <Button className="w-full mt-4 transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring focus:ring-blue-300" variant="outline">
            Update Location
            </Button>
          </CardContent>
        </Card>
      </main>
      <footer className="mt-4">
        <Alert>
          <XIcon className="w-4 h-4" />
          <AlertTitle>Parking Alert</AlertTitle>
          <AlertDescription>Your vehicle is parked in the wrong zone. Please relocate immediately.</AlertDescription>
        </Alert>
      </footer>
    </section>
    <Footer/>
    </>

  )
}

function CarIcon(props) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
