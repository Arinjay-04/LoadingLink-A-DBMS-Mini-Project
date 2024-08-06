import React, { useState } from 'react';
import './Delete.css'; 
import axios from 'axios';
import { getToken } from '../../SaveToken';
import { useNavigate } from 'react-router-dom';

const Delete = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const token = getToken(); 

      // Assuming room ID should be sent as a query parameter
      const result = await axios.post(`http://localhost:3001/api/rooms/delete`, {
        roomnumber: roomId
      },{
        headers: {
          Authorization: `Bearer ${token}`
        },
       
         
      });

      if (result.status === 200) {
        console.log("Room deleted successfully");
        navigate('/main');
      } else {
        console.log("Error: Unable to delete room");
      }

    } catch (error) {
      console.log("Error in deleting room:", error);
    }
  };

  return (
    <div className="delete-form-container">
      <h1 className="delete-form-title">Delete Room</h1>
      <form onSubmit={handleDelete} className="delete-room-form">
        <div className="delete-form-group">
          <label htmlFor="roomId" className="delete-form-label">Room ID:</label>
          <input
            type="text"
            id="roomId"
            placeholder='Enter Room ID'
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            required
            className="delete-form-input"
          />
        </div>

        <button type="submit" className="delete-submit-button">Delete Room</button>
      </form>
    </div>
  );
};

export default Delete;
