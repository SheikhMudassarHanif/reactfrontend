import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface NavbarProps {
  openLogin: () => void;
  openSignUp: () => void;
}

const Navbar: React.FC<{ isAuthenticated: boolean; handleLogout: () => void; openLogin: () => void; openSignUp: () => void }> = ({ 
  isAuthenticated, 
  handleLogout, 
  openLogin, 
  openSignUp 
}) => {
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
          <button className="logout-button" onClick={handleLogout}>Logout</button>
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


// const Navbar: React.FC<NavbarProps> = ({ openLogin, openSignUp }) => {
//   const navigate = useNavigate();  // Initialize useNavigate


//   const handleLogout = () => {
//     // Remove JWT token and username from localStorage
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('username');  // Remove username from localStorage
//     // alert('Logged out successfully!');
//     navigate('/');  // Redirect to home page after logout
//   };  
//   // Check if the user is authenticated (i.e., if the JWT token is in localStorage)
//   const isAuthenticated = localStorage.getItem('access_token') !== null;

//     return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="floodtrack.png" alt="FloodTrack Logo" className="logo-img" />
//         <h2>FloodTrack</h2>
//       </div>
//       <ul className="navbar-links">
//         <li><a href="#features">Features</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#about">About Us</a></li>
//       </ul>
//       <div className="navbar-auth">
//           {isAuthenticated ? (
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//           ):(
//             <button className="login" onClick={openLogin}>Login</button>
//             <button className="signup" onClick={openSignUp}>Sign Up</button>

//           )}
//           <>
//             {/* <button className="login" onClick={openLogin}>Login</button>
//             <button className="signup" onClick={openSignUp}>Sign Up</button> */}
//           </>
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
