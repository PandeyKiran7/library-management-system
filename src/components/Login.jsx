import React, { useState } from 'react';
import './styles/Login.css'; // Make sure to import the CSS file
import Signup from './Signup'; // Import the Signup component

const Login = ({ users, setIsLoggedIn, setUsers, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false); // State to toggle signup form

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setIsLoggedIn(true);
      alert(`Welcome, ${user.name}!`);
      onClose(); // Close the login form after successful login
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <div className="login-container">
      {showSignup ? (
        <Signup setUsers={setUsers} onClose={onClose} /> // Show signup form if toggled
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <button type="button" onClick={handleSignupClick}>Sign Up</button> {/* Button to switch to signup */}
            <button type="button" onClick={onClose}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
