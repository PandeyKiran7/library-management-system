import React, { useState } from 'react';
import AppRoutes from "./router/Routes";
import Navbar from './Navbar';
import Login from './components/Login';
import Users from './components/Users'; // Assuming you have a Users component
import "./components/styles/App.css"; // Specify the correct CSS file for styling

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [users, setUsers] = useState([]); // State to manage users

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} onLoginClick={handleLoginClick} />
      {showLogin && (
        <Login 
          users={users} 
          setIsLoggedIn={setIsLoggedIn} 
          setUsers={setUsers} 
          onClose={handleCloseLogin} 
        />
      )}
      {isLoggedIn && <AppRoutes />} {/* Show routes only if logged in */}
      {!isLoggedIn && <Users setUsers={setUsers} />} {/* Show Users only if NOT logged in */}
    </div>
  );
}

export default App;
