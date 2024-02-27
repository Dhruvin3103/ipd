import Image from "next/image";

import Home_page_2 from './pages/home_page_2'
import Navbar from './pages/Navbar'
import Analysis from "./pages/Analysis"
import Home_page_3 from "./pages/Home_page_3"
import Footer from "./pages/Footer"
import Contact_us from "./pages/Contact_us"
import Find_parking from "./pages/Find_parking"
import Add_parking_spot from "./pages/Add_parking_loc"

export default function Home() {
  return (
    
   <>
    <div >
      {/* <Navbar style={{ backgroundColor: "blue", padding: "10px" }}> */}
        {/* Navbar content */}
      {/* </Navbar> */}
      
      {/* <Home_page_2 /> */}
      {/* <Analysis/> */}
      {/* <Home_page_3/> */}
      {/* <Footer/> */}
      {/* <Contact_us/> */}
      {/* <Find_parking/> */}
      <Add_parking_spot/>
   </div>
   </>
  );
}
