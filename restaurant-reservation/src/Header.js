import React from 'react';
import { Link } from 'react-router-dom'; // React Router's Link component for navigation
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; // MUI components

// Header component
function Header({ isLoggedIn }) {
  return (
    <AppBar position="sticky"> {/* MUI AppBar component for the header */}
      <Toolbar> {/* MUI Toolbar component within the AppBar */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Typography component for the title */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            {/* Link to navigate to the homepage. Styles remove the default link styling */}
            Restaurant Finder
          </Link>
        </Typography>
        {/* Buttons for navigation */}
        <Button color="inherit">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="/search"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Search
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            Login
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Register
          </Link>
        </Button>
        {/* If the user is logged in, show the Profile button */}
        {isLoggedIn && (
          <Button color="inherit">
            <Link
              to="/profile"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Profile
            </Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;