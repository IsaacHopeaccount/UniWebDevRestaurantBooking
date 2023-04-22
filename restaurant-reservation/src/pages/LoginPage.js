import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import LoginForm from '../LoginForm';

function LoginPage({ isLoggedIn, setIsLoggedIn, setUser}) {
  return (
    <Container maxWidth="sm" className="login-container">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      </Box>
    </Container>
  );
}

export default LoginPage;
