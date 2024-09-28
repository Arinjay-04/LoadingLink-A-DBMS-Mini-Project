import React from 'react';
import './MainPage.css';
import { getToken } from '../../SaveToken';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();
  const HandleView = async (e) => {
    e.preventDefault();
  
    try {
      const token = getToken(); 
      const result = await axios.get('http://localhost:3001/api/rooms', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (result.status === 400) {
        console.log("No room available");
        return;
      }
  
      // Log the result data for successful requests
      console.log(result.data);
  
    } catch (error) {
      console.log("Error in server", error);
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
          <button className="button" onClick={() => navigate('/hotelroom')}>View Available Rooms</button>
        </div>
        <div className="button-section">
          <button className="button" onClick={() => navigate('/update')}>Update a Room</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
