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

function LandingPage() {
  return (
    <Container maxWidth="md" className="landing-page">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
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
      </Box>
    </Container>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [reservationData, setReservationData] = useState([]);
  return (
    
    
    <Router>
            <Header isLoggedIn={isLoggedIn} />
            <SimpleChatbot />
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
/>
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
