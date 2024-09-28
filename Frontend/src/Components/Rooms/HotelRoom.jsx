import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../../SaveToken';
import './Room.css';

function HotelRoom() {
  const [rooms, setRooms] = useState([]);
  

  const HandleView = async (e) => {
    if (e) e.preventDefault(); 
    
    try {
      const token = getToken(); 
      const result = await axios.get('http://localhost:3001/api/rooms', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (result.status === 200) {
      
        setRooms(result.data);
      } else {
     
        console.log(`Unexpected status code: ${result.status}`);
      }
      
    } catch (error) {
    
      console.error("Error fetching room data", error);
    }
  };


  useEffect(() => {
    HandleView();
  }, []);

  return (
    <div className="container2">
      <h1>Hotels For You..!!</h1>
      <div className="block-container">
        {rooms.map((room) => (
          <div className="block" key={room.id}>
            <h3>{room.hotelid}. {room.name}</h3>
            <p>Type: {room.type}</p>
            <p>Status: {room.status}</p>
            <p>Price: {room.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelRoom;
