import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Dialog, DialogContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SimpleChatbot() {
  // States for input, chatbot dialog open status, and messages
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi, I'm a simple chatbot! Tell me where you want to go and I'll take you there!",
      sender: 'chatbot',
    },
  ]);

  // Use the navigate function from react-router-dom for navigation
  const navigate = useNavigate();

  // Functions to handle dialog opening and closing
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Function to add a chatbot response to the messages state
  const addChatbotResponse = (responseText) => {
    setMessages([...messages, { text: responseText, sender: 'chatbot' }]);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add user message to messages array
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Depending on user input, respond differently and potentially navigate to a different page
    if (
        input.toLowerCase().includes('how') ||
        input.toLowerCase().includes('purpose') ||
        input.toLowerCase().includes('use') ||
        input.toLowerCase().includes('what')
      ) {
      addChatbotResponse("Just tell me what you need and I'll direct you there! For example, you can say 'I want to search for a restaurant' and i'll redirect you to the search page! ");
    } else if (input.toLowerCase().includes('login')) {
      addChatbotResponse('Taking you there...');  
      handleClose();
      navigate('/login');
    } else if (input.toLowerCase().includes('italian')) {
      addChatbotResponse('Taking you there...'); 
      handleClose();
      navigate('/booking/1');
    } else if (input.toLowerCase().includes('chinese')) {
      addChatbotResponse('Taking you there...'); 
      navigate('/booking/2');
      handleClose();
    } else if (input.toLowerCase().includes('american')) {
      addChatbotResponse('Taking you there...');
      navigate('/booking/3');
      handleClose();
    } else if (input.toLowerCase().includes('search')) {
      addChatbotResponse('Taking you there...');
      navigate('/search');
      handleClose();
    } else if (input.toLowerCase().includes('profile')) {
      addChatbotResponse('Taking you there...');
      navigate('/profile');
      handleClose();
    } else if (input.toLowerCase().includes('make a booking')) {
        addChatbotResponse('Tell me what kind of restaurant you want to eat at and I will take you there.');  
    } else if (input.toLowerCase().includes('reservation')) {
        addChatbotResponse('Tell me what kind of restaurant you want to eat at and I will take you there.');
    } else if (input.toLowerCase().includes('thanks')) {
        addChatbotResponse("You're welcome!");
    } else {
      addChatbotResponse('Sorry, I could not understand your request. I am fairly simple so you will have to be more specific.');
    }


    // After handling input, clear the input field
    setInput('');
  };

    // Function to render all messages in the chat
  const renderMessages = () => {
    console.log('Rendering messages')
    return messages.map((message, index) => (
      <div
        key={index}
        style={{
          textAlign: message.sender === 'chatbot' ? 'left' : 'right',
          marginBottom: '5px',
          backgroundColor: 'lightgrey',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            backgroundColor: message.sender === 'chatbot' ? '#eee' : '#2196F3',
            borderRadius: '5px',
            padding: '5px 10px',
            color: message.sender === 'chatbot' ? 'black' : 'white',
          }}
        >
          {message.text}
        </span>
      </div>
    ));
  };

  
  // Render the chat interface
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Chat
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogContent>
          <Container>
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Chat
              </Typography>
              {renderMessages()}
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Your message"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                  Send
                </Button>
              </form>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}



export default SimpleChatbot;
