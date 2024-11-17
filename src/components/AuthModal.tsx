import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthModal.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoginForm?: boolean; // Optional, as it might not be passed in some cases
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, isLoginForm = true }) => {
const [isLogin, setIsLogin] = useState(isLoginForm);
const navigate = useNavigate(); 
const [isForgotPassword, setIsForgotPassword] = useState(false);
const [otpSent, setOtpSent] = useState(false);
const [fullName, setFullName] = useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[otp,setOtp]=useState('');
const[newpassword,setNewPassowrd]=useState('');
const[confirmPassword,setConfirmPassword]=useState('');
const[message,setMessag]=useState('');
const[error,setError]=useState('');

  if (!isOpen) return null;

  const getCSRFToken = async () => {
    // Get CSRF token from cookies
    const csrfToken = document.cookie.match(/csrftoken=([^;]+)/);
    console.log('All Cookies:', document.cookie);  // Debug to check if csrftoken is present
    return csrfToken ? csrfToken[1] : null;
  };
  const handleForgotPasswordSubmit = async () => {
    const datatoSend = { email };
    console.log('data to send', datatoSend);
  
    try {
      // Get CSRF token from cookies
      const csrfToken = await getCSRFToken();
      console.log(csrfToken);
  
      if (!csrfToken) {
        console.error("CSRF token not found.");
        return;
      }
  
      // Send the POST request for password reset
      const response = await axios.post(
        'http://127.0.0.1:8000/resetPassword/',
        datatoSend, // Send the email as the request body
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
          },
        }
      );
  
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  





  const handleResetPasswordSubmit = () => {
    // Handle password reset logic
    alert('Password reset successfully!');
    onClose();
  };



// Handling login
// Should be called outside the async function

const LoginUser = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/loginUser/', {
      email,
      password,
    });

    if (response.status === 200) {
      const { access_token, username } = response.data;
      // Store the JWT access token in localStorage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('username', username);
      // alert(`Welcome back, ${username}!`);
      navigate('/dashboard');  // Navigate to dashboard after successful login

      onClose(); // Close the modal on successful login
    } else {
      setError('Login failed. Please check your credentials.');
    }
  } catch (error) {
    setError('Something went wrong. Please try again later.');
  }
};



// handling signup
const handleSignup = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/adduser/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: fullName, email, password }), // Corrected syntax
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message || 'Sign-up successful! Welcome on board!');
      onClose();
    } else {
      const errorData = await response.json();
      setError(errorData.detail || "Couldn't sign up.");
    }
  } catch (error) {
    setError('Something went wrong.');
  }
};





















  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-container">
        <div className="auth-modal-image">
          <h3>{isLogin ? 'Welcome Back' : 'Join Us'}</h3>
          <img src="/login-signup-image.jpg" alt="Auth" />
        </div>
        <div className="auth-modal-form">
          <button className="close-button" onClick={onClose}>×</button>

          {isForgotPassword ? (
            otpSent ? (
              <div className="auth-form">
                <h2>Reset Password</h2>
                <input type="text" placeholder="Enter OTP" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm Password" />
                <button className="auth-button" onClick={handleResetPasswordSubmit}>
                  Reset Password
                </button>
              </div>
            ) : (
              <div className="auth-form">
                <h2>Forgot Password</h2>
                <input type="email" placeholder="Enter your email" value={email} 
                onChange={(e)=>setEmail(e.target.value) } />
                <button className="auth-button" onClick={handleForgotPasswordSubmit}>
                  Submit
                </button>
              </div>
            )
          ) : (
            <>
              <div className="form-toggle">
                <button
                  className={`toggle-button ${isLogin ? 'active' : ''}`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button
                  className={`toggle-button ${!isLogin ? 'active' : ''}`}
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </div>

              {isLogin ? (
                <div className="auth-form">
                  <h2>Login</h2>
                  <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <button className="auth-button" onClick={LoginUser}>Login</button>
                  <button
                    className="link-button"
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Forgot Password?
                  </button>
                </div>
              ) : (
                <div className="auth-form">
                  <h2>Sign Up</h2>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="auth-button" onClick={handleSignup}>
                    Sign Up
                  </button>                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
