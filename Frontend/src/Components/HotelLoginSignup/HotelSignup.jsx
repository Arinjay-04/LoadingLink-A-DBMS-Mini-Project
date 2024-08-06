import React, { useState } from 'react';
import './HotelLoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import phone_icon from '../Assets/phone.png';
import hotel from '../Assets/hotel.png';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { saveToken } from '../../SaveToken';

const Register = ({ handleRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleSubmit = async(e) => {
    // handleRegister({ name, email, password, phone, address });
    e.preventDefault();
      try{
        const response = await axios.post('http://localhost:3001/api/hotels/create', {
            name, address, phone, email, password   
        })

        if(response.status === 400){
            console.log(response.data);
            return;
        }
        
        const token = response.data.token;
        saveToken(token);
        navigate('/main');
        console.log("success");


      }catch(error){
          return  console.log("Error:", error);
      }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img className="icon2" src={user_icon} alt="User Icon" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="input">
          <img className="icon2" src={email_icon} alt="Email Icon" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input">
          <img className="icon2" src={password_icon} alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="input">
          <img className="icon2" src={phone_icon} alt="Phone Icon" />
          <input
            type="tel"
            placeholder="Phone no"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className="input">
          <img className="icon3" src={hotel} alt="Hotel Icon" />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
      </div>
      <div className="submit" onClick={handleSubmit}>Register</div>
    </div>
  );
}

export default Register;
