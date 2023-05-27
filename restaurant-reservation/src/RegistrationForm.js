import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function RegistrationForm() {
  // Initialize state for username, password and confirmPassword
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match'); // If not, alert the user
      return; // Return early to stop execution
    }

    // Retrieve the users from local storage (if any), else set to empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the username is already taken
    if (users.some((user) => user.username === username)) {
      alert('Username is already taken'); // If yes, alert the user
      return; // Return early to stop execution
    }

    // If username is not taken, add the new user to the users array
    users.push({ username, password });

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));

    console.log('Registered:', { username, password }); // Log the registered user
  };

  // The form to render
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '300px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Username" variant="outlined" margin="normal" value={username} onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password" variant="outlined" margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password" variant="outlined" margin="normal" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Register
      </Button>
    </Box>
  );
}

export default RegistrationForm;
