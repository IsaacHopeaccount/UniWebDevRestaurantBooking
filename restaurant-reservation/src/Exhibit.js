
import React, { useState } from 'react';
import { Typography, Modal, Box, Button } from '@mui/material';

// Exhibit component
const Exhibit = () => {
  const [open, setOpen] = useState(false);// State for opening/closing the modal
  const [step, setStep] = useState(1);// State for the current step in the instructions

  const handleOpen = () => setOpen(true);// Function to open the modal
  const handleClose = () => setOpen(false);// Function to close the modal

    // Function to go to the next step or close the modal if it's the last step
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleClose();
    }
  };
 // Function to go to the previous step
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  // Function to render the content for each step
  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <>
            <Typography variant="h5" component="h3" gutterBottom>
              Step 1: Search for a restaurant
            </Typography>
            <Typography>
              In this step, you can search for your favorite restaurant by typing its name or location in the search bar. You can also apply filters to narrow down your options.
              You can navigate to the search page using the chatbot, the navigation bar, or the "Get Started" button on the landing page.
            </Typography>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5" component="h3" gutterBottom>
              Step 2: Choose your table
            </Typography>
            <Typography>
              Once you have selected a restaurant, you can view the available tables and choose the one that best suits your preferences.
            </Typography>
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h5" component="h3" gutterBottom>
              Step 3: Confirm your reservation
            </Typography>
            <Typography>
              Finally, fill in your contact information and any special requests, then click "Confirm" to complete your reservation. You will receive a confirmation email with the details of your reservation.
              You can view your reservations on your profile page.
            </Typography>
          </>
        );
      default:
        return '';
    }
  };
 // The component returns a button that opens a modal. The modal displays the instructions step by step.
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        View Example
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h3">
            {renderStepContent(step)}
          </Typography>
          <Box mt={3}>
            {step > 1 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePrevious}
                style={{ marginRight: '16px' }}
              >
                Previous
              </Button>
            )}
            <Button variant="contained" color="primary" onClick={handleNext}>
              {step < 3 ? 'Next' : 'Close'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Exhibit;