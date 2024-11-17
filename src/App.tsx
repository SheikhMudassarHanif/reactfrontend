// // import React, { useState } from 'react';
// // import Navbar from '../components/Navbar';
// import Navbar from './components/Navbar.tsx';
// import { Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard.tsx';  // Adjust path if needed
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Hero from './components/Hero.tsx';
// import Features from './components/Features.tsx';
// import Contact from './components/Contact.tsx';
// import AboutUs from './components/AboutUs.tsx';
// import './App.css';
// import AuthModal from './components/AuthModal.tsx';

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoginForm, setIsLoginForm] = useState(true); // Track if Login or Sign Up is selected

  

//   const openLogin = () => {
//     setIsLoginForm(true);    // Set form type to Login
//     setIsModalOpen(true);    // Open the modal
//   };

//   const openLogin = () => {
//     setIsLoginForm(true);    // Set form type to Login
//     setIsModalOpen(true);    // Open the modal
//   };

//   const openSignUp = () => {
//     setIsLoginForm(false);   // Set form type to Sign Up
//     setIsModalOpen(true);    // Open the modal
//   };

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="App">
//       <Navbar openLogin={openLogin} openSignUp={openSignUp} />
//       <AuthModal 
//         isOpen={isModalOpen} 
//         onClose={closeModal} 
//         isLoginForm={isLoginForm} 
//       />
//       {/* routes */}
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/dashboard" element={<Dashboard/>} /> {/* Dashboard route */}
//         <Route path="/features" element={<Features />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<AboutUs />} />
//       </Routes>
//       <Hero />
//       <Features />
//       <Contact />
//       <AboutUs />
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
import Navbar from './components/Navbar.tsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.tsx';  // Adjust path if needed

import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Contact from './components/Contact.tsx';
import AboutUs from './components/AboutUs.tsx';
import './App.css';
import AuthModal from './components/AuthModal.tsx';
import axios from 'axios';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); // Track if Login or Sign Up is selected

  // Function to fetch and set CSRF token in cookies
  const getCSRFToken = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/setcsrf/');
      console.log('CSRF token set:', response.data.message);
    } catch (error) {
      console.error('Error setting CSRF token:', error);
    }
  };

  // Ensure CSRF token is set when the component mounts
  useEffect(() => {
    getCSRFToken();
  }, []);

  const openLogin = () => {
    setIsLoginForm(true);    // Set form type to Login
    setIsModalOpen(true);    // Open the modal
  };

  const openSignUp = () => {
    setIsLoginForm(false);   // Set form type to Sign Up
    setIsModalOpen(true);    // Open the modal
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Navbar openLogin={openLogin} openSignUp={openSignUp} />
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        isLoginForm={isLoginForm} 
      />
      {/* routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard/>} /> {/* Dashboard route */}
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Hero />
      <Features />
      <Contact />
      <AboutUs />
    </div>
  );
}

export default App;
