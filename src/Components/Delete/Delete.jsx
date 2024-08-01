import React, { useState } from 'react';
import './Delete.css'; 

const Delete = () => {
  const [roomId, setRoomId] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("Room to Delete:", roomId);

   
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
