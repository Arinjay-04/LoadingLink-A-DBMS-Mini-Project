import React from 'react';
import './Landing.css'; // Ensure to create this CSS file for styling
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to Our Platform</h1>
                <p>Choose your role to get started</p>
            </header>
            <div className="landing-buttons">
                <a href="/signup-guest" className="btn guest" ><Link to={'/hotellogin'}>Sign Up as Hotel</Link></a>
                <a href="/signup-hotel" className="btn hotel"><Link to={'/guestlogin'}>Sign Up as Guest</Link></a>
            </div>
        </div>
    );
};

export default LandingPage;
