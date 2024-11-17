// import React from "react";
// import "./Dashboard.css";


// const handleLogout = () => {
//   // Remove JWT token from localStorage
//   localStorage.removeItem('access_token');
//   alert('Logged out successfully!');
//   navigate('/');  // Redirect to home page after logout using navigate
// };


// const Dashboard: React.FC = () => {
//   return (
//     <div className="dashboard">
//       {/* Header */}
//       <header className="dashboard-header">
//         <h1>Welcome, [User]</h1>
//         <nav>
//           <button className="nav-button">Flood Maps</button>
//           <button className="nav-button">Volunteer Program</button>

//           {isAuthenticated ? (
//           <>
//             <span>Welcome Back!</span>
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//           </>
//         )          
//           // <button className="logout-button">Logout</button>
//         </nav>
//       </header>





//       {/* Hero Section */}
//       <section className="dashboard-hero">
//         <h2>Join the Movement</h2>
//         <p>Make a difference by helping those in need or stay informed with real-time flood maps.</p>
//       </section>

//       {/* Card Section */}
//       <section className="dashboard-cards">
//         <div className="dashboard-card volunteer-card">
//           <h3>Volunteer Program</h3>
//           <p>Help flood-affected areas by joining as a volunteer.</p>
//           <button className="card-button">Apply Now</button>
//         </div>
//         <div className="dashboard-card maps-card">
//           <h3>Flood Maps</h3>
//           <p>Access detailed flood extent maps and stay informed.</p>
//           <button className="card-button">View Maps</button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="dashboard-footer">
//         <p>© 2024 FloodTrack | All rights reserved</p>
//         <nav>
//           <a href="#resources">Resources</a>
//           <a href="#contact">Contact</a>
//           <a href="#faq">FAQs</a>
//         </nav>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('access_token') !== null;

  // Get the username (you might want to store it in localStorage upon login)
  const username = localStorage.getItem('username') || "User"; 
   // Default to "User" if not found

  const handleLogout = () => {
    // Remove JWT token and username from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');  // Remove username from localStorage
    // alert('Logged out successfully!');
    navigate('/');  // Redirect to home page after logout
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Welcome, {username}</h1>
        <nav>
          <button className="nav-button">Flood Maps</button>
          <button className="nav-button">Volunteer Program</button>

          {isAuthenticated ? (
            <>
              {/* <span>Welcome Back!</span> */}
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>  // Redirect to login page if not authenticated
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="dashboard-hero">
        <h2>Join the Movement</h2>
        <p>Make a difference by helping those in need or stay informed with real-time flood maps.</p>
      </section>

      {/* Card Section */}
      <section className="dashboard-cards">
        <div className="dashboard-card volunteer-card">
          <h3>Volunteer Program</h3>
          <p>Help flood-affected areas by joining as a volunteer.</p>
          <button className="card-button">Apply Now</button>
        </div>
        <div className="dashboard-card maps-card">
          <h3>Flood Maps</h3>
          <p>Access detailed flood extent maps and stay informed.</p>
          <button className="card-button">View Maps</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>© 2024 FloodTrack | All rights reserved</p>
        <nav>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQs</a>
        </nav>
      </footer>
    </div>
  );
};

export default Dashboard;
