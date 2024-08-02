import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelLogin from './Components/HotelLoginSignup/HotelLogin'
import HotelSignup from './Components/HotelLoginSignup/HotelSignup'
import GuestLogin from './Components/GuestLoginSignup/GuestLogin'
import GuestSignup from './Components/GuestLoginSignup/GuestSignup'
import MainPage from './Components/MainPage/MainPage'
import Insert from './Components/Insert/Insert'
import Delete from './Components/Delete/Delete'
import Update from './Components/Update/Update'
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hotellogin" element={<div className="hotel-background full-screen"><HotelLogin/></div>} />
        <Route path='/hotelsignup' element={<div className="hotel-background full-screen"><HotelSignup/></div>}/>
        <Route path='/guestlogin' element={<div className="guest-background full-screen"><GuestLogin/></div>}/>
        <Route path="/guestsignup" element={<div className="guest-background full-screen"><GuestSignup /></div>} />
        <Route path="/" element={<div>Welcome to the Hotel Management System</div>} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete/>} />
      </Routes>
    </Router>
  );
}

export default App;
