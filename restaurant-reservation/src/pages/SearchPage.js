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

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
          <Button onClick={handleSearch} variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3}>
  {filteredRestaurants.map((restaurant) => (
    <Grid key={restaurant.id} item xs={12} sm={6} md={4}>
      <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none' }}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={restaurant.image}
            alt={restaurant.name}
          />
          <CardContent>
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
