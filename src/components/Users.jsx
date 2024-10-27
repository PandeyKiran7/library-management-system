import React, { useState } from 'react';
import "./styles/Users.css";

const Users = ({ setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Password field

  const handleAddUser = () => {
    if (name && email && password) {
      const newUser = { name, email, password };
      setUsers((prevUsers) => [...prevUsers, newUser]); // Update user list
      alert("User added successfully!");
      // Reset fields
      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="users-container">
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default Users;
