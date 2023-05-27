import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from react-router-dom for programmatically navigating
import { Container, Typography, Box } from '@mui/material'; // Importing required components from @mui/material

function ProfilePage({ isLoggedIn, setIsLoggedIn, user, reservationData }) {

  // Initialize useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle logout action
  const handleLogout = () => {
    // Set isLoggedIn state to false
    setIsLoggedIn(false);
    // Remove the isLoggedIn item from localStorage
    localStorage.removeItem("isLoggedIn");
    // Navigate to login page
    navigate('/login');
  };

  return (
    // Container component for wrapping the content
    <Container maxWidth="md" className="profile-container">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Profile
        </Typography>
        <Box my={4}>
          <Typography variant="h6" component="h2" gutterBottom>
            Personal Information
          </Typography>
          <Typography variant="body1">
            Username: {user && user.username}
          </Typography>
        </Box>
        <Box my={4}>
          <Typography variant="h6" component="h2" gutterBottom>
            Reservations:
          </Typography>
          {reservationData.map((reservation, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body1">
                Restaurant: {reservation.restaurant}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
}

export default ProfilePage;
