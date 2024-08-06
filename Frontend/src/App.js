import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelLogin from './Components/HotelLoginSignup/HotelLogin';
import HotelSignup from './Components/HotelLoginSignup/HotelSignup';
import GuestLogin from './Components/GuestLoginSignup/GuestLogin';
import GuestSignup from './Components/GuestLoginSignup/GuestSignup';
import MainPageHospital from './Components/MainPage/MainPageHospital';
import MainPageGuest from './Components/MainPage/MainPageGuest';
import Rooms from './Components/Rooms/Rooms';
import Insert from './Components/Insert/Insert';
import Delete from './Components/Delete/Delete';
import Update from './Components/Update/Update';
import LandingPage from './Landing/Landing';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hotellogin" element={<div className="hotel-background full-screen"><HotelLogin /></div>} />
        <Route path="/hotelsignup" element={<div className="hotel-background full-screen"><HotelSignup /></div>} />
        <Route path="/guestlogin" element={<div className="guest-background full-screen"><GuestLogin /></div>} />
        <Route path="/guestsignup" element={<div className="guest-background full-screen"><GuestSignup /></div>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/main" element={<MainPageHospital />} />
        <Route path="/mainguest" element={<MainPageGuest />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/rooms/:id" element={<Rooms />} /> {/* Updated route path */}
      </Routes>
    </Router>
  );
}

export default App;
