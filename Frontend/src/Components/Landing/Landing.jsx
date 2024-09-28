import React from 'react';
import './Landing.css'; 
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
            <h1>Welcome to <span className='loadingheader'>Loading</span>Link</h1>
                <p>Choose your role to get started</p>
            </header>
            <div className="landing-buttons">
                <button className="guest"> <Link to={'/hotellogin'}>Sign Up as Hotel</Link></button>
                <button className="hotel"> <Link to={'/guestlogin'}>Sign Up as Guest</Link></button>
            </div>
        </div>
    );
};

export default LandingPage;
