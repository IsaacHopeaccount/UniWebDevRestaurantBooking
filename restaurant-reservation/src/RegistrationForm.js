import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((user) => user.username === username)) {
      alert('Username is already taken');
      return;
    }
   users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));

  console.log('Registered:', { username, password });
};

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        margin="normal"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Register
      </Button>
    </Box>
  );
}

export default RegistrationForm;