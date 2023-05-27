import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import './BookingPage.css';
import tableImage from './table2.svg';
import restaurants from './restaurants.json';
import { useParams, Link } from 'react-router-dom';

// Initial tables data
const initialTables = [
  { id: 1, available: true },
  { id: 2, available: false },
  { id: 3, available: true },
  { id: 4, available: true },
  { id: 5, available: false },
  { id: 6, available: true },
];

// BookingPage component. This is a functional component that utilizes hooks.
function BookingPage({ setReservationData }) {
  // State management with hooks
  const [tables, setTables] = useState(initialTables); // Current tables status
  const [selectedTable, setSelectedTable] = useState(null); // The table the user has selected
  const [reservationStatus, setReservationStatus] = useState(''); // Reservation status
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false); // Open/close dialog state
  const { id } = useParams(); // The id parameter from the route
  const restaurant = restaurants.find((r) => r.id === parseInt(id)); // The current restaurant

  // Validate email function
  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Email validation state
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);

  // Function to close the dialog
  const handleClose = () => {
    setOpenSuccessDialog(false);
  };

  // Function to handle when a table is clicked
  const handleTableClick = (table) => {
    if (table.available) {
      setSelectedTable(table.id);
    }
  };

  // Function to handle reservation submission
  const handleReservation = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (selectedTable) { // If a table has been selected
      setReservationStatus('success');
      // Update tables data to reflect new reservation
      const updatedTables = tables.map((table) =>
        table.id === selectedTable ? { ...table, available: false } : table
      );
      setTables(updatedTables);
      
      // Collect form data
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const guests = formData.get("guests");
      const time = formData.get("time");

      // Update reservation data
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
      setOpenSuccessDialog(true); // Open success dialog
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
                    backgroundColor: selectedTable === table.id ? '#444' : 'transparent',
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
            <form onSubmit={handleReservation}>
              <TextField label="Name" name="name" variant="outlined" margin="normal" required fullWidth autoFocus />
              <TextField label="Email" name="email" variant="outlined" margin="normal" required fullWidth type="email" value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        setIsEmailError(!validateEmail(e.target.value));
                    }}
                    error={isEmailError}
                    helperText={isEmailError && "Please enter a valid email."}
                />
              
              <TextField label="Phone" name="phone" variant="outlined" margin="normal" required fullWidth />
              <TextField label="Number of Guests" name="guests" variant="outlined" margin="normal" required fullWidth type="number" InputProps={{ inputProps: { min: 1 } }}/>
              <TextField label="Time" name="time" variant="outlined" margin="normal" required fullWidth type="time" InputLabelProps={{ shrink: true }} inputProps={{ step: 300 }}/>
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={!selectedTable}>Reserve</Button>
            </form>
          </Box>
        </Box>
      </Container>
      <Dialog
        open={openSuccessDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Booking Successful!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your table has been reserved successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BookingPage;