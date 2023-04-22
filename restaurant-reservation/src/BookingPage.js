import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';
import './BookingPage.css';
import tableImage from './table2.svg';
import restaurants from './restaurants.json';
import { useParams, Link } from 'react-router-dom';

const initialTables = [
    { id: 1, available: true },
    { id: 2, available: false },
    { id: 3, available: true },
    { id: 4, available: true },
    { id: 5, available: false },
    { id: 6, available: true },
  ];


  
  function BookingPage({setReservationData}) {
    const [tables, setTables] = useState(initialTables);
    const [selectedTable, setSelectedTable] = useState(null);
    const [reservationStatus, setReservationStatus] = useState('');
    const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  
    const handleTableClick = (table) => {
      if (table.available) {
        setSelectedTable(table.id);
      }
    };
  
    const handleReservation = (event) => {
      event.preventDefault();
  
      if (selectedTable) {
        setReservationStatus('success');
  
        const updatedTables = tables.map((table) =>
          table.id === selectedTable ? { ...table, available: false } : table
        );
        setTables(updatedTables);
  
          // Get form data and store it
          const formData = new FormData(event.target);
          const name = formData.get("name");
          const email = formData.get("email");
          const phone = formData.get("phone");
          const guests = formData.get("guests");
          const time = formData.get("time");

          setReservationData((prevData) => [
            ...prevData,
            {
              table: selectedTable,
              name,
              email,
              phone,
              guests,
              time,
              restaurant: restaurants[(id-1)].name,
            },
          ]);
        }
      };
      return (
        <div className="booking-page">
          <Container maxWidth="sm" className="booking-container">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Book Your Table
              </Typography>
              <Grid container spacing={3}>
                {tables.map((table) => (
                  <Grid
                    key={table.id}
                    item
                    xs={4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={tableImage}
                      alt={`Table ${table.id}`}
                      onClick={() => handleTableClick(table)}
                      style={{
                        width: '50px',
                        height: '40px',
                        cursor: table.available ? 'pointer' : 'not-allowed',
                        opacity: table.available ? 1 : 0.5,
                        backgroundColor:
                          selectedTable === table.id ? '#444' : 'transparent',
                        padding: selectedTable === table.id ? '4px' : '0',
                        borderRadius: '4px',
                      }}
                    />
                    <Typography
                      align="center"
                      style={{
                        paddingTop: '8px',
                      }}
                    >
                      {'Table: ' + table.id}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Box mt={4}>
                {reservationStatus === 'success' ? (
                  <Typography variant="h6" color="primary">
                    Your table has been reserved successfully!
                  </Typography>
                ) : (
                  <form onSubmit={handleReservation}>
                    <TextField
                      label="Name"
                      name="name"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                    />
                    <TextField
                      label="Email"
                      name="email"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      type="email"
                    />
                    <TextField
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                    />
                    <TextField
                      label="Number of Guests"
                      name="guests"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      type="number"
                      InputProps={{
                        inputProps: { min: 1 },
                      }}
                    />
                    <TextField
                      label="Time"
                      name="time"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      type="time"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}

                />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={!selectedTable}
                    >
                      Reserve
                    </Button>
                  </form>
                )}
              </Box>
            </Box>
          </Container>
        </div>
      );
    }
    
    export default BookingPage;