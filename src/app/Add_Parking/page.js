"use client"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css';
import Navbar_2 from "@/timepass/Navbar_2"
import Footer from '@/timepass/Footer';

const AddLocationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    coordinates: { lat: 0, lng: 0 }, // Initialize with default values
  });

  useEffect(() => {
    getLocation(); // Call getLocation function when component mounts
  }, []);

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
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const { latitude, longitude } = position.coords;
    setFormData(prevData => ({
      ...prevData,
      coordinates: {
        lat: latitude,
        lng: longitude
      }
    }));
  }

  return (
    <>
      <Navbar_2 />
      <div className="container">
        <h4>Add New Parking Location</h4>
        <div className="map-container">
          <MapContainer center={[formData.coordinates.lat, formData.coordinates.lng]} zoom={20} scrollWheelZoom={true} style={{ height: '600px', width: '70%', float: 'left' }}>
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
        <div className="form-container" style={{ width: '30%', float: 'right' }}>
          <h1>Add Location</h1>
          <div className="form">
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, category: e.target.value }))}
              />
            </label>
            <label>
              Coordinates:
              <input
                type="text"
                value={`${formData.coordinates.lat}, ${formData.coordinates.lng}`}
                readOnly
              />
            </label>
          </div>
          <div className="submit-button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <style jsx>{`
          h4{
            font-weight: bold; /* Make text bold */
      font-size: 36px; /* Increase font size */
          }
          .container {
            max-width: 1500px;
            margin: auto;
            padding: 20px;
          }
  
          .map-container {
            width: 70%;
            float: left;
            margin-bottom: 20px;
          }
  
          .form-container {
            width: 30%;
            float: right;
          }
  
          .form {
            margin-bottom: 20px;
          }
  
          .form label {
            display: block;
            margin-bottom: 10px;
          }
  
          .form input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
          }
          .submit-button {
            display: flex;
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center vertically */
            height: 100%; /* Set height to ensure vertical centering */
          }
  
          .submit-button button {
            padding: 25px 20px; /* Increased padding for better readability */
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%; /* Make the button full width */
            text-align: center; /* Center the text */
          }
  
          .submit-button button:hover {
            background-color: #0056b3;
          }
        `}</style>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AddLocationPage;
