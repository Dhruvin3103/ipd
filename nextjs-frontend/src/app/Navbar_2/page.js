/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RRIBVrKwp6d
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar_2 from "@/timepass/Navbar_2"
import Image from "next/image"
import home_page_pic_2 from "@/images/home_page_pic_2.png"
import Footer from "@/timepass/Footer"

export default function Component() {
  return (
    <>
    <Navbar_2/>
      {/* <div className="relative grid gap-6">
        <div className="absolute inset-0 w-full h-full bg-gray-900/10 rounded-lg backdrop-blur dark:bg-gray-50/10" />
        <header className="container grid gap-4 px-4 md:px-6">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link className="flex items-center space-x-2" href="#">
                <MapIcon className="w-6 h-6" />
                <span className="font-semibold">Discover</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link className="font-medium flex items-center space-x-2 text-gray-900" href="#">
                Home
              </Link>
              <Link className="font-medium" href="#">
                About
              </Link>
              <Link className="font-medium" href="#">
                Destinations
              </Link>
              <Link className="font-medium" href="#">
                Contact
              </Link>
            </div>
          </nav>
        </header> */}
        {/* <div className="grid items-center min-h-screen gap-12 lg:gap-0 pt-16 lg:grid-cols-[1fr_800px] lg:pt-24 xl:grid-cols-[1fr_1100px]">
          <div className="flex flex-col justify-center space-y-4 order-last px-6 lg:order-first lg:px-0">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl">Island Paradise</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the breathtaking beauty of our secluded island paradise. Pristine beaches, crystal-clear waters,
                and unforgettable sunsets await.
              </p>
            </div>
          </div>
          <img
            alt="Hero"
            className="aspect-video overflow-hidden rounded-t-lg object-cover object-center lg:rounded-t-none lg:rounded-l-lg"
            height="600"
            src="/placeholder.svg"
            width="1200"
          />
        </div>
      </div> */}
      {/* <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-12">
            <div className="flex flex-col items-center justify-center space-y-2 text-center lg:w-1/3 lg:order-last lg:text-left">
              <UmbrellaIcon className="w-12 h-12 rounded-full bg-gray-100 p-3 dark:bg-gray-800" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Sandy Shores</h3>
                <p className="max-w-[500px] text-center text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Miles of soft, powdery sand perfect for beachcombing and relaxation.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center lg:w-1/3 lg:text-left">
              <PalmtreeIcon className="w-12 h-12 rounded-full bg-gray-100 p-3 dark:bg-gray-800" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Tropical Tranquility</h3>
                <p className="max-w-[500px] text-center text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Lush palm groves and cool shade, the perfect escape from the sun.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center lg:w-1/3 lg:order-first lg:text-left">
              <SunsetIcon className="w-12 h-12 rounded-full bg-gray-100 p-3 dark:bg-gray-800" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Evening Magic</h3>
                <p className="max-w-[500px] text-center text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Spectacular sunsets that paint the sky with a riot of colors every evening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     <section className="pt-12">
  <div className="container px-4 md:px-6">
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            <span className="block">The Parking 🚘</span>
            <span className="block ml-20">🚨Guardian</span>
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            𝙰 𝚞𝚜𝚎𝚛-𝚏𝚛𝚒𝚎𝚗𝚍𝚕𝚢 ✌️ 𝚊𝚗𝚍 𝚎𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚜𝚘𝚕𝚞𝚝𝚒𝚘𝚗 𝚍𝚎𝚜𝚒𝚐𝚗𝚎𝚍 𝚝𝚘 𝚊𝚍𝚍𝚛𝚎𝚜𝚜 𝚝𝚑𝚎 𝚙𝚛𝚘𝚋𝚕𝚎𝚖 𝚘𝚏 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚙𝚊𝚛𝚔𝚒𝚗𝚐 🚘🚨𝚊𝚗𝚍 𝚒𝚖𝚙𝚛𝚘𝚟𝚎 𝚘𝚟𝚎𝚛𝚊𝚕𝚕 𝚙𝚊𝚛𝚔𝚒𝚗𝚐 🅿️ 𝚖𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝 𝚒𝚗 𝚞𝚛𝚋𝚊𝚗 𝚊𝚛𝚎𝚊𝚜
          </p>
        </div>
        <ul className="grid gap-2 py-4">
          <li>
            <CheckIcon className="mr-2 inline-block h-4 w-4" />
            Smart Parking
          </li>
          <li>
            <CheckIcon className="mr-2 inline-block h-4 w-4" />
            Easy to Use
          </li>
          <li>
            <CheckIcon className="mr-2 inline-block h-4 w-4" />
            Facilitates Free Parking
          </li>
        </ul>
      </div>
      {/* Image part */}
      <div className="lg:order-last">
  <Image 
    src={home_page_pic_2}
    className="rounded-lg shadow-xl"
  />
</div>
    </div>
  </div>
</section>
      {/* <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cultural Treasures</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Immerse yourself in the local heritage and traditions of the island.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <ChevronRightIcon className="mr-2 inline-block h-4 w-4" />
                  Exploring charming fishing villages and meeting friendly locals.
                </li>
                <li>
                  <ChevronRightIcon className="mr-2 inline-block h-4 w-4" />
                  Sampling authentic island cuisine, from fresh seafood dishes to tropical fruit delights.
                </li>
                <li>
                  <ChevronRightIcon className="mr-2 inline-block h-4 w-4" />
                  Visiting historic temples, colorful markets, and traditional craft workshops.
                </li>
              </ul>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:aspect-square"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </div>
      </section> */}
      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:aspect-square"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fetching Real-Time Location 🗺️✅</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {/* Encounter the enchanting beauty of the island's landscapes and ecosystems. */}
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <ChevronRightIcon className="mr-2 inline-block h-4 w-4" />
                  Get Notified in case of Wrong Parking Areas
                </li>
                <li>
                  <ChevronRightIcon className="mr-2 inline-block h-4 w-4" />
                  Observing rare bird species in the island's pristine habitats.
                </li>
                <li>
                  <ChevronRightIcon className="mr-2 inline-block h-4 w-4" />
                  Trekking through ancient forests and marveling at the diverse flora.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 py-8 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <Link className="font-semibold" href="#">
                Home
              </Link>
              <Link className="font-semibold" href="#">
                About
              </Link>
              <Link className="font-semibold" href="#">
                Destinations
              </Link>
              <Link className="font-semibold" href="#">
                Contact
              </Link>
            </div>
            <div className="flex-1">
              <div className="grid place-items-center h-10 w-full rounded-xl border border-gray-200 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <Input
                  className="grid w-full h-full text-sm font-body bg-transparent border-0 outline-none placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="m-0 px-3 h-full rounded-[0.75rem]" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-row items-start justify-end gap-2">
              <Link className="flex items-center space-x-2" href="#">
                <MapIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Discover</span>
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </>
  )
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
    
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MapIcon(props) {
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
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}


function PalmtreeIcon(props) {
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
      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
      <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
      <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z" />
      <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
    </svg>
  )
}


function SunsetIcon(props) {
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
      <path d="M12 10V2" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m16 6-4 4-4-4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  )
}


function UmbrellaIcon(props) {
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
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  )
}
