/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hbhvESQLc88
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Navbar_2 from "@/timepass/Navbar_2"
import Footer from "@/timepass/Footer"


export default function Component() {
  return (
    <>
    <Navbar_2/>
    <div>
      <div />
      <div className="my-6">
        <div className="lg:grid lg:gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">2019 Tesla Model S</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center space-x-4">
                    <MapIcon className="h-6 w-6" />
                    <div className="space-y-1.5">
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        Current Location
                      </p>
                      <p className="text-base font-medium leading-none">37.7749° N, 122.4194° W</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4">
                    <ClockIcon className="h-6 w-6" />
                    <div className="space-y-1.5">
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">Last Updated</p>
                      <p className="text-base font-medium leading-none">2 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl"></CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center space-x-4">
                    <MapIcon className="h-6 w-6" />
                    <div className="space-y-1.5">
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        Previous Location
                      </p>
                      <p className="text-base font-medium leading-none">37.7749° N, 122.4194° W</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4">
                    {/* <ClockIcon className="h-6 w-6" /> */}
                    <div className="space-y-1.5">
                      {/* <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">Last Updated</p> */}
                      {/* <p className="text-base font-medium leading-none">2 minutes ago</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Location History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full aspect-[2/1] overflow-hidden rounded-lg">
                <img alt="Map" className="aspect-[2/1] object-cover" height={400} src="/placeholder.svg" width={800} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
