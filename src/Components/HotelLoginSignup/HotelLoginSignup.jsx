import React, { useState } from 'react';
import './HotelLoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import phone_icon from '../Assets/phone.png';
import hotel from '../Assets/hotel.png';

const HotelLoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action} </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img className="icon2" src={user_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div>}
        <div className="input">
          <img className="icon2" src={email_icon} alt="" />
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img className="icon2" src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
        {action === "Login" ? <div></div> : <div className='input'>
          <img className="icon" src={phone_icon} alt="" />
          <input type="Phone Number" placeholder='Phone no' />
        </div>}
        {action === "Login" ? <div></div> : <div className="input">
          <img className="icon3" src={hotel} alt="" />
          <input type="Address" placeholder='Address' />
        </div>}
      </div>
      {action === "Register" ? <div></div> : <div className="forgot-password">forgot password?<span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Register") }}>Register</div>
        <div className={action === "Register" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  );
}

export default HotelLoginSignup;
