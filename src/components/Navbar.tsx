import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface NavbarProps {
  openLogin: () => void;
  openSignUp: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openLogin, openSignUp }) => {
  const navigate = useNavigate();  // Initialize useNavigate

  // Check if the user is authenticated (i.e., if the JWT token is in localStorage)
  const isAuthenticated = localStorage.getItem('access_token') !== null;

  // const handleLogout = () => {
  //   // Remove JWT token from localStorage
  //   localStorage.removeItem('access_token');
  //   alert('Logged out successfully!');
  //   navigate('/');  // Redirect to home page after logout using navigate
  // };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="floodtrack.png" alt="FloodTrack Logo" className="logo-img" />
        <h2>FloodTrack</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
      <div className="navbar-auth">
        {isAuthenticated ? (
          <>
            {/* <span>Welcome Back!</span> */}
            {/* <button className="logout" onClick={handleLogout}>Logout</button> */}
          </>
        ) : (
          <>
            <button className="login" onClick={openLogin}>Login</button>
            <button className="signup" onClick={openSignUp}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
