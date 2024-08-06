import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../../SaveToken';
import './MainPage1.css';  
import { Link } from 'react-router-dom';

function Guest() {
  const [hotels, setHotels] = useState([]);

  const handleHotel = async () => {
    try {
      const token = getToken();
      const result = await axios.get('http://localhost:3001/api/hotels', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(result.data);
      setHotels(result.data);
    } catch (error) {
      console.log("Error in server", error);
    }
  };

  useEffect(() => {
    handleHotel();
  }, []);

  return (
    <div className="container2">
      <h1>Hotels For You..!!</h1>
      <div className="block-container">
        {hotels.map((hotel) => (
          <div className="block" key={hotel.id}>
            <Link to={`/rooms/${hotel.hotelid}`}>
              <h3>{hotel.hotelid}. {hotel.name}</h3>
              <p>Address: {hotel.address}</p>
              <p>Phone: {hotel.phone}</p>
              <p>Email: {hotel.email}</p>
              <h4>Available Rooms: {hotel.available_room}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guest;
