import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import RestaurantDetails from './RestaurantDetails';
import BookingPage from './BookingPage';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './ProfilePage';
import SimpleChatbot from './SimpleChatbot';
import InteractiveImage from './InteractiveImage';
import ScrollBox from './ScrollBox';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Exhibit from './Exhibit';
import AboutUsPage from './AboutUsPage';

// This is the Landing page of the website that contains interactive image, scrolling text box and other introductory content.
function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay"></div>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          minHeight="100vh"
          textAlign="center"
          width="100%"
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white' }}>
            Restaurant Reservation
          </Typography>
          <Typography variant="h5" component="p" gutterBottom sx={{ color: 'white' }}>
            Find and reserve your table in your favorite restaurant!
          </Typography>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/search"
            >
              Get Started
            </Button>
          </Box>
          <Box mt={3}>
            <InteractiveImage />
            <ScrollBox />
            <Box mt={3}>
              <Exhibit />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

// The App component which is the root of the application.
function App() {
  // State variables to manage user logged in state, user data, and reservation data.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [reservationData, setReservationData] = useState([]);

  // Rendering the application
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <SimpleChatbot />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route
          path="/booking/:id"
          element={
            <BookingPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setReservationData={setReservationData}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route
          path="/profile"
          element={
            <ProfilePage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              reservationData={reservationData}
            />
          }
        />
      </Routes>
      <Footer isLoggedIn={isLoggedIn} />
    </Router>
  );
}

export default App;