import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ isLoggedIn, setIsLoggedIn, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
  
    if (!user) {
      alert('Invalid username or password');
      return;
    }
  
    console.log('Logged in:', user);
    setIsLoggedIn(true);
    setUser(user);
    navigate('/profile');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
