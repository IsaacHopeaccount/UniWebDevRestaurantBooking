import React, { useState } from 'react'; // Importing React and useState hook
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from react-router-dom for programmatically navigating

function LoginForm({ isLoggedIn, setIsLoggedIn, setUser }) {
  const [username, setUsername] = useState(''); // Initializing username state
  const [password, setPassword] = useState(''); // Initializing password state

  const navigate = useNavigate(); // Initializing useNavigate hook for navigation

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
  
    // Getting the list of users from local storage or assigning an empty array if not found
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Finding the user who has the entered username and password
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
  
    // If the user is not found, alert an error and return
    if (!user) {
      alert('Invalid username or password');
      return;
    }
  
    // Logging the found user
    console.log('Logged in:', user);
    // Setting isLoggedIn state to true and setting the current user
    setIsLoggedIn(true);
    setUser(user);
    // Navigating to the profile page
    navigate('/profile');
  };
  
  // Returning the JSX for the login form
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>
        Username:
        {/* Input field for username, controlled by username state */}
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        {/* Input field for password, controlled by password state */}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {/* Submit button for form */}
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
