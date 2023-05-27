import React from 'react';
import { Container, Typography, Box, Paper} from '@mui/material';


const AboutUsPage = () => {
    return (
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Welcome to Restaurant Reservation, where you can find and reserve your table in your favorite restaurant with ease. Our platform connects users with a wide range of restaurants, making it easy to find the perfect dining experience for any occasion.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our team is dedicated to creating a seamless and enjoyable experience for our users. We strive to provide the most accurate and up-to-date information on restaurant availability and offerings, so you can make informed decisions and enjoy a memorable dining experience.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We are constantly working to improve our platform and add new features, so your feedback is always appreciated. If you have any questions or suggestions, please feel free to reach out to us. Thank you for choosing Restaurant Reservation!
            </Typography>
          </Paper>
        </Box>
      </Container>
    );
  };

  export default AboutUsPage;
