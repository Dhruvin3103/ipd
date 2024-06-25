/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RsIIwrxZOTy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import Navbar_2 from "@/timepass/Navbar_2"
import Footer from "@/timepass/Footer"
import Map2 from "@/timepass/Map2"

export default function Component() {

  
  return (
    <>
    
    <Navbar_2/>
    

      
      <main className="flex-1">
        
      <section className="w-full py-0!important md:py-10 lg:py xl: bg-gray-100 dark:bg-gray-800">
  <div className="container px-4 md:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 w-full">      {/* Left Section for Cards */}
      <div className="flex flex-col justify-center space-y-6 md:space-y-4 lg:space-y-6 md:w-30%">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Nearest Parking Zones</h2>
        {/* First Card */}
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-900">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-2 py-1 text-xs md:text-sm dark:bg-gray-800">
              Beach Getaways
            </div>
            <p className="text-gray-500 text-sm md:text-base dark:text-gray-400">
              Beautiful beaches, crystal-clear waters, and endless sunshine. The perfect destination for relaxation and adventure.
            </p>
          </div>
          <Link
            className="block mt-2 text-center bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-3 rounded transition-colors duration-300 text-xs md:text-sm"
            href="#"
          >
            View Route
          </Link>
        </div>
        
        {/* Second Card (You can duplicate this structure for more cards) */}
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-900">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-2 py-1 text-xs md:text-sm dark:bg-gray-800">
              Mountain Adventures
            </div>
            <p className="text-gray-500 text-sm md:text-base dark:text-gray-400">
              Majestic peaks, fresh mountain air, and thrilling trails. Embark on an unforgettable journey through the mountains.
            </p>
          </div>
          <Link
            className="block mt-2 text-center bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-3 rounded transition-colors duration-300 text-xs md:text-sm"
            href="#"
          >
            View Route
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-900">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-2 py-1 text-xs md:text-sm dark:bg-gray-800">
              Mountain Adventures
            </div>
            <p className="text-gray-500 text-sm md:text-base dark:text-gray-400">
              Majestic peaks, fresh mountain air, and thrilling trails. Embark on an unforgettable journey through the mountains.
            </p>
          </div>
          <Link
            className="block mt-2 text-center bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-3 rounded transition-colors duration-300 text-xs md:text-sm"
            href="#"
          >
            View Route
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-900">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-2 py-1 text-xs md:text-sm dark:bg-gray-800">
              Mountain Adventures
            </div>
            <p className="text-gray-500 text-sm md:text-base dark:text-gray-400">
              Majestic peaks, fresh mountain air, and thrilling trails. Embark on an unforgettable journey through the mountains.
            </p>
          </div>
          <Link
            className="block mt-2 text-center bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-3 rounded transition-colors duration-300 text-xs md:text-sm"
            href="#"
          >
            View Route
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-900">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-2 py-1 text-xs md:text-sm dark:bg-gray-800">
              Mountain Adventures
            </div>
            <p className="text-gray-500 text-sm md:text-base dark:text-gray-400">
              Majestic peaks, fresh mountain air, and thrilling trails. Embark on an unforgettable journey through the mountains.
            </p>
          </div>
          <Link
            className="block mt-2 text-center bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-3 rounded transition-colors duration-300 text-xs md:text-sm"
            href="#"
          >
            View Route
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-900">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-2 py-1 text-xs md:text-sm dark:bg-gray-800">
              Mountain Adventures
            </div>
            <p className="text-gray-500 text-sm md:text-base dark:text-gray-400">
              Majestic peaks, fresh mountain air, and thrilling trails. Embark on an unforgettable journey through the mountains.
            </p>
          </div>
          <Link
            className="block mt-2 text-center bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-3 rounded transition-colors duration-300 text-xs md:text-sm"
            href="#"
          >
            View Route
          </Link>
        </div>
      </div>
      
      {/* Right Section for Image */}
      <div className="flex justify-center items-center w-full h-full">
  <div className="container mx-auto">
    <div className="h-screen flex justify-center items-center">
      <div className="w-full h-full" style={{ height: '1000px', width: '100% !important', position: 'relative', top: '0px', zIndex: '9999', outlineStyle: 'none' }}>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200"></h2>
        <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full md:h-full lg:w-full">
          <div>
            <Map2/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</section>


        
      </main>
      
    <Footer/>
    </>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}



// 'use client'
// import dynamic from 'next/dynamic'
 

// const DynamicMap = dynamic(() => import('@/timepass/Map'), {
//   ssr: false
// });

// export default function Home() {
//   return (
//     <main>
//      <DynamicMap />
//     </main>
//   )
// }