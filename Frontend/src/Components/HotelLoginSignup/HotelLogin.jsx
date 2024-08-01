import React, { useState } from 'react';
import axios from 'axios';
import './HotelLoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { Link, useNavigate } from 'react-router-dom';
import { saveToken } from '../../SaveToken';

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

  const handleSubmit = async(e) => {
    e.preventDefault();
      try{
        const response = await axios.post('http://localhost:3001/loginhotel', {
            email,
            password
            
        })


        if(response.status === 400){
            console.log(response.token);
            return;
        }
        

        const token = response.data.token;
        console.log(token);
        saveToken(token); 

        navigate('/main');
        console.log("success");


      }catch(error){

      }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img className="icon2" src={email_icon} alt="Email Icon" />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input">
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
      <div className="forgot-password">Forgot password? <span>Click Here!</span></div>
      <div className="submit" onClick={handleSubmit}>Login</div>
    </div>
  );
}

export default Login;
