import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header({ isLoggedIn }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Restaurant Finder
          </Link>
        </Typography>
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
