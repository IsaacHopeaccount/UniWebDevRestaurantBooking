import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import RegistrationForm from '../RegistrationForm';

/* Register page */
function RegisterPage() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create an Account
        </Typography>
        <RegistrationForm />
      </Box>
    </Container>
  );
}

export default RegisterPage;
