import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { Link, useNavigate } from 'react-router-dom';
import { saveToken } from '../../SaveToken';
import image from '../Assets/hotelsignup.svg'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/api/auth/login/hotel', {
            email,
            password
        });

        if (response.status === 400) {
            console.error('Error: ', response.data.message); // Log the error message
            return;
        }

        const token = response.data.token;
        if (token) {
            console.log('Token received:', token);
            saveToken(token); 
            navigate('/main');
            console.log("Login successful");
        } else {
            console.error('Token not found in response');
        }
    } catch (error) {
        console.error('Error during login:', error.response ? error.response.data : error.message); // Log the error
    }
};

  return (
   
    <div className='main'>
    <div className='container1'>
      <div className="header1">
        <div className="text1">Login</div>
        <div className="underline1"></div>
      </div>
      <div className="inputs1">
        <div className="input1">
          <img className="icon2" src={email_icon} alt="Email Icon" />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input1">
          <img className="icon2" src={password_icon} alt="Password Icon" />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
      </div>
      <div className="forgot-password1">Forgot password? <span>Click Here!</span></div>
      <div className="submit1" onClick={handleSubmit}>Login</div>
    </div>
    <div className="image-container1">
        <img src={image} alt="Signup illustration" className="signup-image" />
      </div>

    </div>
  );
}

export default Login;
