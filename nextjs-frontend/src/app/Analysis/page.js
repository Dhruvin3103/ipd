"use client"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ABwtIgzRdGg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTitle, AlertDescription, Alert } from "@/components/ui/alert"
import Navbar_2 from "@/timepass/Navbar_2"
import Footer from "@/timepass/Footer"
import { useRouter } from 'next/navigation';
import Map from "@/timepass/Map"
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  AreaChart,
  Area
} from 'recharts';


const data01 = [
  { name: 'Iphone', value: 400 },
  { name: 'Android', value: 700 },
  { name: 'Google Pixel', value: 100 },
  // { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

const data = [
  { name: "6 Days Ago", Distance_Kms: 2.7 },
  { name: "5 Days Ago", Distance_Kms: 5.3},
  { name: "4 Days Ago", Distance_Kms: 1.2 },
  { name: "3 Days Ago", Distance_Kms: 3},
  { name: "2 Days Ago", Distance_Kms: 6.1},
  { name: "Yesterday", Distance_Kms: 4.3},
  { name: "Today", Distance_Kms: 2.8},
];


const data03 = [
  {
    "name": "6 Days Ago in Km/hr",
    "speed": 80,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "5 Days Ago in Km/hr",
    "speed": 30,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "4 Days Ago in Km/hr",
    "speed": 45,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "3 Days Ago in Km/hr",
    "speed": 15,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "2 Days Ago in Km/hr",
    "speed": 25,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Yesterday in Km/hr",
    "speed": 37,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Today in Km/hr",
    "speed": 69,
    "pv": 4300,
    "amt": 2100
  }
]

export default function Component() {

    const router=useRouter()

  const Ayush =()=>{
    router.push("home_page_2")
  }
  return (
    <>
    <Navbar_2/>
    <section className="w-full h-full p-4 md:p-6 lg:p-8">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold"> Analysis</h1>
        <Badge className="items-center">
          <CarIcon className="w-5 h-5" />
          Vehicle Status: Active
        </Badge>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-[400px] rounded-md overflow-hidden">
          <div className="height:400 width:500 "  style={{
              aspectRatio: "500/400",
              objectFit: "cover",
            }}>
         <Map/>
          {/* <img
            alt="Map showing vehicle location"
            className="w-full h-full object-cover"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/400",
              objectFit: "cover",
            }}
            width="500"
          /> */}
          
          </div>
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
              <p>2.7 Kms</p>
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
        <div className="chart-box">
                <h2></h2>
                <BarChart
  width={500}
  height={300}
  data={data}
  margin={{
    top: 5,
    right: 30,
    left: 80,
    bottom: 5,
  }}
  barSize={20}
>
  <XAxis
    dataKey="name"
    scale="point"
    padding={{ left: 10, right: 10 }}
  />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid strokeDasharray="3 3" />
  <Bar dataKey="Distance_Kms" fill="#8884d8" background={{ fill: "#eee" }} />
</BarChart>

                </div>
                <AreaChart width={730} height={250} data={data03}
                
  margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
      <div >Speed in Km/hr</div>

  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <div >Speed in Km/hr</div>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="speed" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <div x="50%" y={275} textAnchor="middle">Speed in km/hr</div>
</AreaChart>

      </main>
      
      

              


    </section>
    <footer className="mt-4">
        <Alert>
          <XIcon className="w-4 h-4" />
          <AlertTitle>Parking Alert</AlertTitle>
          <AlertDescription>Your vehicle is parked in the wrong zone. Please relocate immediately.</AlertDescription>
        </Alert>

      </footer>
    {/* <Footer/> */}
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
