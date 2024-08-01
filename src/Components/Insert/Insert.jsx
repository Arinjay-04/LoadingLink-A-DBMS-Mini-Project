import React, { useState } from 'react';
import './Insert.css'; 

const Insert = () => {
  const [roomId, setRoomId] = useState('');
  const [roomType, setRoomType] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Room Details:", { roomId, roomType, price });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Insert New Room</h1>
      <form onSubmit={handleSubmit} className="room-form">
        <div className="form-group">
          <label htmlFor="roomId" className="form-label">Room ID:</label>
          <input
            type="text"
            id="roomId"
            value={roomId}
            placeholder='Enter Room ID'
            onChange={(e) => setRoomId(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="roomType" className="form-label">Room Type:</label>
          <select
            id="roomType"
            value={roomType}
            
            onChange={(e) => setRoomType(e.target.value)}
            required
            className="form-input"
          >
            <option value="">Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Family">Family</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            placeholder='Enter Price'
            onChange={(e) => setPrice(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">Insert Room</button>
      </form>
    </div>
  );
};

export default Insert;
