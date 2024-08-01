import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestLoginSignup from './Components/GuestLoginSignup/GuestLoginSignup';
import HotelLoginSignup from './Components/HotelLoginSignup/HotelLoginSignup';
import MainPage from './Components/MainPage/MainPage';
import Insert from './Components/Insert/Insert';
import Delete from './Components/Delete/Delete';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hotel" element={<div className="hotel-background full-screen"><HotelLoginSignup /></div>} />
        <Route path="/guest" element={<div className="guest-background full-screen"><GuestLoginSignup /></div>} />
        <Route path="/" element={<div>Welcome to the Hotel Management System</div>} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/delete" element={<Delete/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
