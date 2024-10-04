import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelLogin from './Components/HotelLoginSignup/HotelLogin.jsx';
import HotelSignup from './Components/HotelLoginSignup/HotelSignup';
import GuestLogin from './Components/GuestLoginSignup/GuestLogin';
import GuestSignup from './Components/GuestLoginSignup/GuestSignup';
import MainPageHospital from './Components/MainPage/MainPageHotel';
import MainPageGuest from './Components/MainPage/MainPageGuest';
import Rooms from './Components/Rooms/Rooms';
import Insert from './Components/Insert/Insert';
import Delete from './Components/Delete/Delete';
import Update from './Components/Update/Update';
import LandingPage from './Components/Landing/Landing'
import HotelRoom from './Components/Rooms/HotelRoom';
import Error from './Components/UnauthorizeToken/error.jsx';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hotellogin" element={<HotelLogin />} />
        <Route path="/hotelsignup" element={<HotelSignup />} />
        <Route path="/guestlogin" element={<GuestLogin />} />
        <Route path="/guestsignup" element={<GuestSignup />} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/main" element={<MainPageHospital />} />
        <Route path="/mainguest" element={<MainPageGuest />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/hotelroom" element={<HotelRoom />} />
        <Route path="/rooms/:id" element={<Rooms />} /> {/* Updated route path */}
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
