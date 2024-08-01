import React from 'react';
import './MainPage.css';

export const MainPage = () => {
  return (
    <div className='main-page'>
      <h1>Hotel Management System</h1>
      <div className="button-container">
        <div className="button-section">
          <button className="button">Insert a Room</button>
 
        </div>
        <div className="button-section">
          <button className="button">Delete a Room</button>
        </div>
        <div className="button-section">
          <button className="button">View Available Rooms</button>
        </div>
        <div className="button-section">
          <button className="button">Update a Room</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
