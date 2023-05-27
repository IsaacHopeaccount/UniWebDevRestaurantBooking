import React from 'react';
import { useParams, Link } from 'react-router-dom';
import restaurants from './restaurants.json';
import Rating from './Rating';
import './RestaurantDetails.css';

import { Container, Typography, Box, Paper, Grid, CardMedia, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function RestaurantDetails() {
  // Retrieve the id from the URL parameters
  const { id } = useParams();
  
  // Find the restaurant in the array using the id
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  console.log('Restaurant:', restaurant);

  // If the restaurant does not exist, display a message
  if (!restaurant) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Restaurant not found
        </Typography>
      </Container>
    );
  }

  // If the restaurant does exist, display its details
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {restaurant.name}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {restaurant.description}
        </Typography>
        <Rating value={Number(restaurant.rating)} />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Address:</Typography>
              <Typography>{restaurant.address}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Phone:</Typography>
              <Typography>{restaurant.phone}</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box my={4}>
          <CardMedia
            component="img"
            height="300"
            image={restaurant.image}
            alt={restaurant.name}
            className="card-media"
          />
        </Box>

        <Box my={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Menu
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {restaurant.menu.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">${item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box my={2}>
          <Link to={`/booking/${restaurant.id}`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Book Table
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default RestaurantDetails;
