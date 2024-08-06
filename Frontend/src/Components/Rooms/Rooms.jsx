import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getToken } from '../../SaveToken';
import './Room.css'; 
import { useNavigate } from 'react-router-dom';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const { id } = useParams(); 
  const navigate = useNavigate();
  const ReserveRoom = async (roomnumber) => {
    const token = getToken();
    try {
      const result = await axios.post('http://localhost:3001/api/reservations/create', {
        roomnumber: roomnumber,
        hotelId: id
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Room reserved:', result.data);
      navigate('/mainguest')
    } catch (error) {
      console.log("Error in Reserving room", error);
    }
  }

  const handleRoom = async () => {
    try {
      const token = getToken();
      const result = await axios.get(`http://localhost:3001/api/rooms/guest/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(result.data);
      setRooms(result.data);
    } catch (error) {
      console.log("Error in server", error);
    }
  };

  useEffect(() => {
    handleRoom();
  }, [id]);

  return (
    <div className="container1">
      <h1>Rooms Available</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <h3>Room: {room.roomnumber}</h3>
            <p>Type: {room.type}</p>
            <p>Status: {room.status}</p>
            <p>Price: ₹{room.price}</p>
            <button onClick={() => ReserveRoom(room.roomnumber)}>Reserve Room</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
