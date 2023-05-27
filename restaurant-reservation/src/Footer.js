import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer({ isLoggedIn }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '16px',
        position: 'sticky', // Make the footer sticky
        bottom: 0, // Position the footer at the bottom
        zIndex: 10, // Keep the footer on top of other elements
      }}
    >
      <Typography variant="body1">
        Follow us on{' '}
        <Link href="https://www.facebook.com" target="_blank" rel="noopener" color="inherit"> {/* Add links to social media, these just go to the homepages of the social media sites for show
          Facebook */}
        </Link>
        ,{' '}
        <Link href="https://www.instagram.com" target="_blank" rel="noopener" color="inherit">
          Instagram
        </Link>
        , and{' '}
        <Link href="https://www.twitter.com" target="_blank" rel="noopener" color="inherit">
          Twitter
        </Link>
      </Typography>
      <Typography variant="body1">
        Contact us: contact@example.com
      </Typography>
      <Typography variant="body1">
        <Link href="/about" color="inherit">
          About us
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
