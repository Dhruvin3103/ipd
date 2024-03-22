"use client"

// Import necessary modules and components
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef ,useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup ,useMapEvents} from 'react-leaflet';
import { useState } from 'react';
import "../timepass/Map.css"; // Assuming you have custom CSS for the map

const Map = () => {
    // Define initial state and other logic as needed

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        coordinates: { lat: 0, lng: 0 }, // Initialize with default values
      });
      const mapRef = useRef();
    
      const handleMapClick = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          coordinates: e.latlng,
        }));
      };
    
      const handleSubmit = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/location/addloc/', {
            name: formData.name,
            category: formData.category,
            coordinates: [formData.coordinates.lat, formData.coordinates.lng],
            user: 1,
          });
          console.log(formData.coordinates.lat, formData.coordinates.lng);
    
          if (response.status === 200) {
            console.log('Location added successfully');
          } else {
            console.error('Error adding location');
          }
        } catch (error) {
          console.error('Error making API request:', error.message);
        }
      };
    
      const iconUrl2 = 'https://cdn-icons-png.flaticon.com/512/3082/3082383.png';
      const userLocationIcon2 = new L.Icon({
        iconUrl: iconUrl2,
        iconSize: [50, 50],
      });
    
      const MapClickHandler = () => {
        const map = useMapEvents({
          click: handleMapClick,
        });
    
        return null;
      };

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => showPosition(position),
            (error) => console.error("Error getting location:", error)
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      }
    
      useEffect(() => {
        getLocation();
      }, []);
    
      function showPosition(position) {
        const { latitude, longitude } = position.coords;
        setFormData((prevData) => ({
          ...prevData,
          coordinates: {
            lat: latitude,
            lng: longitude
          }
        }));
        const map = mapRef.current;
        if (map) {
          map.setView([latitude, longitude], 18);
        }
      }

    return (


        <div className="map-container">
          <MapContainer ref={mapRef} center={[formData.coordinates.lat, formData.coordinates.lng]} zoom={18} scrollWheelZoom={true} style={{ height: '600px', width: '70%', float: 'left' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {formData.coordinates && (
              <Marker position={formData.coordinates} icon={userLocationIcon2}>
                <Popup>
                  <div>
                    <p>Name: {formData.name}</p>
                    <p>Category: {formData.category}</p>
                  </div>
                </Popup>
              </Marker>
            )}
            <MapClickHandler />
          </MapContainer>
        </div>
        // <div className="w-full h-full overflow-hidden rounded-lg border border-gray-300">
        //     <MapContainer style={{ height: '100%', width: '100%' }} center={[0, 0]} zoom={15} scrollWheelZoom={false}>
        //         <TileLayer
        //             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //         />

        //         {/* Render markers and other map elements as needed */}
        //     </MapContainer>
        // </div>
    );
}

export default Map;











// 'use client'

// import L from 'leaflet'
// // import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
// // import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
// import 'leaflet/dist/leaflet.css'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import { useState } from 'react'
// import "../timepass/Map.css"

// const Map = () => {

//     // const [coord, setCoord] = useState([51.505, -0.09])

//     // const SearchLocation = () => {
//     //     return (
//     //         <div className="search-location">
//     //             <input type="text" placeholder="Search Location" />
//     //         </div>
//     //     )
//     // }

//     // const GetMyLocation = () => {
//     //     const getMyLocation = () => {
//     //         if (navigator.geolocation) {
//     //             navigator.geolocation.getCurrentPosition((position) => {
//     //                 setCoord([position.coords.latitude, position.coords.longitude])
//     //             })
//     //         } else {
//     //             console.log("Geolocation is not supported by this browser.")
//     //         }
//     //     }

//     //     return (
//     //         <div className="get-my-location">
//     //             <button onClick={getMyLocation}>Get My Location</button>
//     //         </div>
//     //     )
//     // }

//     return (
//         <div>
//             {/* <SearchLocation /> */}
//             {/* <GetMyLocation /> */}
//             <MapContainer style={{
//                 height: '100vh',
//                 width: '100vw'
//             }} center={[0,0]} zoom={15} scrollWheelZoom={false}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />

//                 {/* <Marker icon={
//                     new L.Icon({
//                         // iconUrl: MarkerIcon.src,
//                         // iconRetinaUrl: MarkerIcon.src,
//                         iconSize: [25, 41],
//                         iconAnchor: [12.5, 41],
//                         popupAnchor: [0, -41],
//                         // shadowUrl: MarkerShadow.src,
//                         shadowSize: [41, 41],
//                     })
//                 } position={[51.505, -0.09]}>
//                      <Popup>
//                         A pretty CSS3 popup. <br /> Easily customizable.
//                     </Popup>
//                 </Marker> */}
//             </MapContainer>
//         </div>
//     )
// }

// export default Map

// In your React component file




// "use client"

// import React, { useState, useRef, useEffect } from 'react';
// import dynamic from 'next/dynamic'; // Import dynamic from Next.js

// // Importing Axios on the client-side only
// const axios = require('axios');

// // Importing react-leaflet dynamically to prevent server-side rendering issues
// const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
//   ssr: false // Disable SSR
// });
// const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
//   ssr: false // Disable SSR
// });
// const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
//   ssr: false // Disable SSR
// });
// const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
//   ssr: false // Disable SSR
// });
// const useMapEvents = dynamic(() => import('react-leaflet').then((mod) => mod.useMapEvents), {
//   ssr: false // Disable SSR
// });

// // Importing Leaflet directly
// const L = dynamic(() => import('leaflet'), { ssr: false }); // Disable SSR

// // Your component code here
