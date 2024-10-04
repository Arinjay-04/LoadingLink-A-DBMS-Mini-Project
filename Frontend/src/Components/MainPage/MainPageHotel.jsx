import React, { useState } from 'react';
import './MainPage.css';
import { getToken } from '../../SaveToken'; // Use this for hotel authentication
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();
  const [hotelId, setHotelId] = useState('');

  const HandleHotelView = async (e) => {
    e.preventDefault();
    try {
      const token = getToken();
      const result = await axios.get('http://localhost:3001/api/rooms', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!result || result.status === 400) {
        console.log("No rooms available");
        navigate('/error');
        return;
      }

      console.log(result.data);
      navigate('/hotelroom');
    } catch (error) {
      console.log("Error in server", error);
      navigate('/error');
    }
  };

  const HandleGuestView = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(`http://localhost:3001/api/rooms/guest/${hotelId}`);

      if (!result || result.status === 400) {
        console.log("No rooms available for this hotel");
        navigate('/error');
        return;
      }

      console.log(result.data);
      // Navigate or display room data for the guest
      navigate('/guestrooms');
    } catch (error) {
      console.log("Error fetching guest rooms", error);
      navigate('/error');
    }
  };

  return (
    <div className='main-page'>
      <h1>Hotel Management System</h1>
      <div className="button-container">
        <div className="button-section">
          <button className="button" onClick={() => navigate('/insert')}>Insert a Room</button>
        </div>
        <div className="button-section">
          <button className="button" onClick={() => navigate('/delete')}>Delete a Room</button>
        </div>
        <div className="button-section">
          <button className="button" onClick={HandleHotelView}>View Available Rooms (Hotel)</button>
        </div>
        <div className="button-section">
          <button className="button" onClick={() => navigate('/update')}>Update a Room</button>
        </div>
        <div className="button-section">
          <button className="button" onClick={HandleGuestView}>View Rooms (Guest)</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
