import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

function ProfilePage({ isLoggedIn, setIsLoggedIn, user, reservationData }) {
  // ...
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
  };

  return (
    <Container maxWidth="md" className="profile-container">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Profile
        </Typography>
                {/* Personal information section */}
                <Box my={4}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Personal Information
                  </Typography>
                  <Typography variant="body1">
                    Username: {user && user.username}
                  </Typography>
                  {/* Add your form here to update personal information */}
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
                      <Typography variant="body1">
                        Table: {reservation.table}
                      </Typography>
                      <Typography variant="body1">
                        Name: {reservation.name}
                      </Typography>
                      <Typography variant="body1">
                        Email: {reservation.email}
                      </Typography>
                      <Typography variant="body1">
                        Phone: {reservation.phone}
                      </Typography>
                      <Typography variant="body1">
                        Guests: {reservation.guests}
                      </Typography>
                      <Typography variant="body1">
                        Time: {reservation.time}
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
