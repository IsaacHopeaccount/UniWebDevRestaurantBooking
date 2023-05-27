import React, { useState } from 'react';
import restaurants from './restaurants.json';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

// The SearchPage component displays a list of restaurants and allows user to search for restaurants.
function SearchPage() {
  // The `searchTerm` state variable stores the current search term.
  const [searchTerm, setSearchTerm] = useState('');

  // The `filteredRestaurants` state variable stores the current list of restaurants that match the search term.
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  // `handleSearchChange` is the event handler for changes to the search text field. 
  // It updates the `searchTerm` state variable with the new text field value.
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // `handleSearch` is the event handler for the search button click event. 
  // It updates the `filteredRestaurants` state variable with the restaurants that match the search term.
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  };

  // The component returns a JSX element that represents the search page.
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Find Your Restaurant
        </Typography>
        <Box mt={2} display="flex">
          <TextField
            fullWidth
            label="Search restaurants"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            color="primary"
            className="search-button"
          >
            Search
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {filteredRestaurants.map((restaurant) => (
          <Grid key={restaurant.id} item xs={12} sm={6} md={4}>
            <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none' }}>
              <Card className="restaurant-card">
                <CardMedia
                  component="img"
                  height="140"
                  image={restaurant.image}
                  alt={restaurant.name}
                  className="restaurant-card-media"
                />
                <CardContent className="restaurant-card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.description}
                  </Typography>
                  <Rating value={restaurant.rating} />
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SearchPage;
